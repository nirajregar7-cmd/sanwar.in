import { describe, it, expect } from "vitest";
import {
  toMinutes,
  toTimeStr,
  addDays,
  dateStr,
  buildSlots,
} from "../server/slot-auto-generator";

describe("toMinutes", () => {
  it("should convert midnight to 0", () => {
    expect(toMinutes("00:00")).toBe(0);
  });

  it("should convert 09:30 to 570", () => {
    expect(toMinutes("09:30")).toBe(570);
  });

  it("should convert 23:59 to 1439", () => {
    expect(toMinutes("23:59")).toBe(1439);
  });

  it("should convert 12:00 to 720", () => {
    expect(toMinutes("12:00")).toBe(720);
  });
});

describe("toTimeStr", () => {
  it("should convert 0 to 00:00", () => {
    expect(toTimeStr(0)).toBe("00:00");
  });

  it("should convert 570 to 09:30", () => {
    expect(toTimeStr(570)).toBe("09:30");
  });

  it("should convert 1439 to 23:59", () => {
    expect(toTimeStr(1439)).toBe("23:59");
  });

  it("should pad single-digit hours and minutes", () => {
    expect(toTimeStr(65)).toBe("01:05");
  });
});

describe("toMinutes ↔ toTimeStr roundtrip", () => {
  it("should roundtrip correctly", () => {
    const times = ["00:00", "09:30", "12:00", "15:45", "23:59"];
    for (const t of times) {
      expect(toTimeStr(toMinutes(t))).toBe(t);
    }
  });
});

describe("addDays", () => {
  it("should add 0 days and return the same date", () => {
    const base = new Date("2025-06-01T00:00:00Z");
    const result = addDays(base, 0);
    expect(result.getDate()).toBe(base.getDate());
  });

  it("should add 1 day", () => {
    const base = new Date("2025-06-01T00:00:00Z");
    const result = addDays(base, 1);
    expect(result.getDate()).toBe(2);
  });

  it("should handle month rollover", () => {
    const base = new Date("2025-01-31T00:00:00Z");
    const result = addDays(base, 1);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(1);
  });

  it("should not mutate the original date", () => {
    const base = new Date("2025-06-01T00:00:00Z");
    const originalDate = base.getDate();
    addDays(base, 5);
    expect(base.getDate()).toBe(originalDate);
  });
});

describe("dateStr", () => {
  it("should format a date as YYYY-MM-DD", () => {
    const d = new Date("2025-06-09T12:00:00Z");
    expect(dateStr(d)).toBe("2025-06-09");
  });

  it("should zero-pad month and day", () => {
    const d = new Date("2025-01-05T00:00:00Z");
    expect(dateStr(d)).toBe("2025-01-05");
  });
});

describe("buildSlots", () => {
  it("should generate 30-min slots for a normal workday", () => {
    const slots = buildSlots("2025-06-09", "09:00", "17:00", null, null);
    // 8 hours / 30 min = 16 slots
    expect(slots).toHaveLength(16);
    expect(slots[0]).toEqual({
      date: "2025-06-09",
      startTime: "09:00",
      endTime: "09:30",
    });
    expect(slots[slots.length - 1]).toEqual({
      date: "2025-06-09",
      startTime: "16:30",
      endTime: "17:00",
    });
  });

  it("should skip slots that overlap with break time", () => {
    const slots = buildSlots("2025-06-09", "09:00", "17:00", "13:00", "14:00");
    // 16 total - 2 break slots (13:00-13:30, 13:30-14:00) = 14
    expect(slots).toHaveLength(14);
    const startTimes = slots.map((s) => s.startTime);
    expect(startTimes).not.toContain("13:00");
    expect(startTimes).not.toContain("13:30");
  });

  it("should return empty array when open == close", () => {
    const slots = buildSlots("2025-06-09", "09:00", "09:00", null, null);
    expect(slots).toHaveLength(0);
  });

  it("should return empty when open > close", () => {
    const slots = buildSlots("2025-06-09", "17:00", "09:00", null, null);
    expect(slots).toHaveLength(0);
  });

  it("should handle break spanning a single slot", () => {
    // Break 10:00-10:30 should remove exactly one slot
    const slots = buildSlots("2025-06-09", "09:00", "11:00", "10:00", "10:30");
    // 4 slots total, 1 removed = 3
    expect(slots).toHaveLength(3);
    const startTimes = slots.map((s) => s.startTime);
    expect(startTimes).toEqual(["09:00", "09:30", "10:30"]);
  });

  it("should propagate the date to every slot", () => {
    const slots = buildSlots("2025-12-25", "10:00", "11:00", null, null);
    for (const slot of slots) {
      expect(slot.date).toBe("2025-12-25");
    }
  });
});
