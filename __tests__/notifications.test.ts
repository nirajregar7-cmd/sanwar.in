import { describe, it, expect } from "vitest";
import { checkNotificationTypeEnabled } from "../server/notifications";

describe("checkNotificationTypeEnabled", () => {
  const fullSettings = {
    bookingConfirmation: true,
    bookingReminder: true,
    dayBeforeReminder: true,
    hourBeforeReminder: true,
    promotionalNotifications: false,
  };

  it("should return true for booking_confirmation when enabled", () => {
    expect(checkNotificationTypeEnabled(fullSettings, "booking_confirmation")).toBe(true);
  });

  it("should return true for booking_reminder when enabled", () => {
    expect(checkNotificationTypeEnabled(fullSettings, "booking_reminder")).toBe(true);
  });

  it("should return true for day_before_reminder when enabled", () => {
    expect(checkNotificationTypeEnabled(fullSettings, "day_before_reminder")).toBe(true);
  });

  it("should return true for hour_before_reminder when enabled", () => {
    expect(checkNotificationTypeEnabled(fullSettings, "hour_before_reminder")).toBe(true);
  });

  it("should return false for promotional when disabled", () => {
    expect(checkNotificationTypeEnabled(fullSettings, "promotional")).toBe(false);
  });

  it("should return true for promotional when enabled", () => {
    expect(
      checkNotificationTypeEnabled(
        { ...fullSettings, promotionalNotifications: true },
        "promotional",
      ),
    ).toBe(true);
  });

  it("should return false for unknown notification type", () => {
    expect(checkNotificationTypeEnabled(fullSettings, "unknown_type")).toBe(false);
  });

  it("should return false for empty string type", () => {
    expect(checkNotificationTypeEnabled(fullSettings, "")).toBe(false);
  });

  it("should return false when all settings are disabled", () => {
    const disabledSettings = {
      bookingConfirmation: false,
      bookingReminder: false,
      dayBeforeReminder: false,
      hourBeforeReminder: false,
      promotionalNotifications: false,
    };
    expect(checkNotificationTypeEnabled(disabledSettings, "booking_confirmation")).toBe(false);
    expect(checkNotificationTypeEnabled(disabledSettings, "booking_reminder")).toBe(false);
  });
});
