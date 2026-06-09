import { describe, it, expect } from "vitest";
import {
  timeToMinutes,
  minutesToTime,
  generateSlotsForTimeRange,
  findConsecutiveSlots,
  type TimeSlot,
} from "../server/smart-scheduling";

describe("timeToMinutes", () => {
  it("should convert 00:00 to 0", () => {
    expect(timeToMinutes("00:00")).toBe(0);
  });

  it("should convert 10:30 to 630", () => {
    expect(timeToMinutes("10:30")).toBe(630);
  });

  it("should convert 23:59 to 1439", () => {
    expect(timeToMinutes("23:59")).toBe(1439);
  });
});

describe("minutesToTime", () => {
  it("should convert 0 to 00:00", () => {
    expect(minutesToTime(0)).toBe("00:00");
  });

  it("should convert 630 to 10:30", () => {
    expect(minutesToTime(630)).toBe("10:30");
  });

  it("should pad single-digit hours and minutes", () => {
    expect(minutesToTime(65)).toBe("01:05");
  });
});

describe("generateSlotsForTimeRange", () => {
  it("should generate regular slots for a simple range", () => {
    const slots = generateSlotsForTimeRange("09:00", "11:00", 30, ["svc-1"]);
    expect(slots).toHaveLength(4);
    expect(slots[0]).toMatchObject({
      startTime: "09:00",
      endTime: "09:30",
      isAvailable: true,
      slotType: "regular",
      compatibleServices: ["svc-1"],
    });
    expect(slots[0].id).toBe("slot-09:00-09:30");
  });

  it("should mark break slots correctly", () => {
    const slots = generateSlotsForTimeRange(
      "12:00",
      "14:00",
      30,
      ["svc-1"],
      "13:00",
      "13:30",
    );
    expect(slots).toHaveLength(4);
    const breakSlot = slots.find((s) => s.startTime === "13:00");
    expect(breakSlot).toBeDefined();
    expect(breakSlot!.isAvailable).toBe(false);
    expect(breakSlot!.slotType).toBe("break");
    expect(breakSlot!.compatibleServices).toEqual([]);
  });

  it("should assign compatible services to non-break slots", () => {
    const services = ["svc-a", "svc-b"];
    const slots = generateSlotsForTimeRange("10:00", "11:00", 30, services);
    for (const slot of slots) {
      expect(slot.compatibleServices).toEqual(services);
    }
  });

  it("should return empty array when start == end", () => {
    const slots = generateSlotsForTimeRange("10:00", "10:00", 30, []);
    expect(slots).toHaveLength(0);
  });

  it("should handle no break parameters", () => {
    const slots = generateSlotsForTimeRange("09:00", "10:00", 30, ["svc-1"]);
    expect(slots.every((s) => s.isAvailable)).toBe(true);
    expect(slots.every((s) => s.slotType === "regular")).toBe(true);
  });
});

describe("findConsecutiveSlots", () => {
  const makeSlot = (
    startTime: string,
    endTime: string,
    isAvailable = true,
    slotType: "regular" | "break" = "regular",
  ): TimeSlot => ({
    id: `slot-${startTime}-${endTime}`,
    staffId: "staff-1",
    startTime,
    endTime,
    isAvailable,
    slotType,
    compatibleServices: ["svc-1"],
  });

  it("should find consecutive groups of available slots", () => {
    const slots = [
      makeSlot("09:00", "09:30"),
      makeSlot("09:30", "10:00"),
      makeSlot("10:00", "10:30"),
    ];
    const groups = findConsecutiveSlots(slots, 2);
    expect(groups).toHaveLength(2);
    expect(groups[0][0].startTime).toBe("09:00");
    expect(groups[0][1].startTime).toBe("09:30");
    expect(groups[1][0].startTime).toBe("09:30");
    expect(groups[1][1].startTime).toBe("10:00");
  });

  it("should skip break slots", () => {
    const slots = [
      makeSlot("09:00", "09:30"),
      makeSlot("09:30", "10:00", false, "break"),
      makeSlot("10:00", "10:30"),
    ];
    const groups = findConsecutiveSlots(slots, 2);
    // 09:00 and 10:00 are not consecutive since break at 09:30 is filtered out
    expect(groups).toHaveLength(0);
  });

  it("should skip unavailable slots", () => {
    const slots = [
      makeSlot("09:00", "09:30"),
      makeSlot("09:30", "10:00", false),
      makeSlot("10:00", "10:30"),
    ];
    const groups = findConsecutiveSlots(slots, 2);
    expect(groups).toHaveLength(0);
  });

  it("should filter by preferredStartTime", () => {
    const slots = [
      makeSlot("09:00", "09:30"),
      makeSlot("09:30", "10:00"),
      makeSlot("10:00", "10:30"),
      makeSlot("10:30", "11:00"),
    ];
    const groups = findConsecutiveSlots(slots, 2, "10:00");
    // Only groups whose first slot starts at or after 10:00 qualify: [10:00, 10:30]
    expect(groups).toHaveLength(1);
    expect(groups[0][0].startTime).toBe("10:00");
    expect(groups[0][1].startTime).toBe("10:30");
  });

  it("should return empty when not enough consecutive slots exist", () => {
    const slots = [makeSlot("09:00", "09:30")];
    const groups = findConsecutiveSlots(slots, 3);
    expect(groups).toHaveLength(0);
  });

  it("should find single-slot groups when slotsNeeded is 1", () => {
    const slots = [
      makeSlot("09:00", "09:30"),
      makeSlot("10:00", "10:30"),
    ];
    const groups = findConsecutiveSlots(slots, 1);
    expect(groups).toHaveLength(2);
  });
});
