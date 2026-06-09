import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getBaseUrl, generateTimeSlotsForDate } from "../server/routes";

describe("getBaseUrl", () => {
  const originalEnv = process.env.BASE_URL;

  beforeEach(() => {
    delete process.env.BASE_URL;
  });

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env.BASE_URL = originalEnv;
    } else {
      delete process.env.BASE_URL;
    }
  });

  it("should return BASE_URL env var when set", () => {
    process.env.BASE_URL = "https://custom.example.com";
    expect(getBaseUrl()).toBe("https://custom.example.com");
  });

  it("should return BASE_URL even when requestHost is sanwarhub.in", () => {
    process.env.BASE_URL = "https://custom.example.com";
    expect(getBaseUrl("sanwarhub.in")).toBe("https://custom.example.com");
  });

  it("should return sanwarhub URL when host is sanwarhub.in", () => {
    expect(getBaseUrl("sanwarhub.in")).toBe("https://sanwarhub.in");
  });

  it("should return sanwarhub URL when host contains sanwarhub.in", () => {
    expect(getBaseUrl("www.sanwarhub.in")).toBe("https://sanwarhub.in");
  });

  it("should return default replit URL as fallback", () => {
    expect(getBaseUrl()).toBe("https://sanwar-book-nirajregar7.replit.app");
  });

  it("should return default replit URL for other hosts", () => {
    expect(getBaseUrl("other.example.com")).toBe(
      "https://sanwar-book-nirajregar7.replit.app",
    );
  });
});

describe("generateTimeSlotsForDate", () => {
  it("should generate correct slots for a standard workday", () => {
    const slots = generateTimeSlotsForDate(
      "2025-06-09",
      "09:00",
      "17:00",
      30,
      "13:00",
      "14:00",
    );
    expect(slots.length).toBeGreaterThan(0);
    expect(slots[0].date).toBe("2025-06-09");
    expect(slots[0].startTime).toBe("09:00");
  });

  it("should skip break time slots", () => {
    const slots = generateTimeSlotsForDate(
      "2025-06-09",
      "12:00",
      "15:00",
      30,
      "13:00",
      "14:00",
    );
    const startTimes = slots.map((s) => s.startTime);
    expect(startTimes).not.toContain("13:00");
    expect(startTimes).not.toContain("13:30");
    expect(startTimes).toContain("12:00");
    expect(startTimes).toContain("14:00");
  });

  it("should not generate slots beyond closing time", () => {
    const slots = generateTimeSlotsForDate(
      "2025-06-09",
      "16:00",
      "17:00",
      45,
      "00:00",
      "00:00",
    );
    // 60 min window, 45 min slot: only 1 slot fits (16:00-16:45)
    expect(slots).toHaveLength(1);
    expect(slots[0].endTime).toBe("16:45");
  });

  it("should generate no slots when open == close", () => {
    const slots = generateTimeSlotsForDate(
      "2025-06-09",
      "10:00",
      "10:00",
      30,
      "00:00",
      "00:00",
    );
    expect(slots).toHaveLength(0);
  });

  it("should skip slot that spans across break entirely", () => {
    // 60 min slot that would span 12:00-13:00, break is 12:15-12:45
    const slots = generateTimeSlotsForDate(
      "2025-06-09",
      "12:00",
      "14:00",
      60,
      "12:15",
      "12:45",
    );
    // The 12:00-13:00 slot overlaps break, should be skipped
    const startTimes = slots.map((s) => s.startTime);
    expect(startTimes).not.toContain("12:00");
    expect(startTimes).toContain("13:00");
  });
});
