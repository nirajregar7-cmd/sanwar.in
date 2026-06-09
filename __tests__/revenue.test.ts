import { describe, it, expect } from "vitest";
import { calculateRevenueShare, REVENUE_SHARE } from "../shared/revenue";

describe("REVENUE_SHARE constants", () => {
  it("should define platform at 20% and salon at 80%", () => {
    expect(REVENUE_SHARE.PLATFORM_PERCENTAGE).toBe(20);
    expect(REVENUE_SHARE.SALON_PERCENTAGE).toBe(80);
    expect(REVENUE_SHARE.PLATFORM_PERCENTAGE + REVENUE_SHARE.SALON_PERCENTAGE).toBe(100);
  });
});

describe("calculateRevenueShare", () => {
  it("should split a round confirmation amount correctly", () => {
    const result = calculateRevenueShare(1000);
    expect(result.platformShare).toBe(200);
    expect(result.salonShare).toBe(800);
    expect(result.total).toBe(1000);
  });

  it("should round fractional amounts to 2 decimal places", () => {
    const result = calculateRevenueShare(333);
    expect(result.platformShare).toBe(66.6);
    expect(result.salonShare).toBe(266.4);
    expect(result.total).toBe(333);
  });

  it("should handle zero amount", () => {
    const result = calculateRevenueShare(0);
    expect(result.platformShare).toBe(0);
    expect(result.salonShare).toBe(0);
    expect(result.total).toBe(0);
  });

  it("should handle small amounts (paise-level)", () => {
    const result = calculateRevenueShare(1);
    expect(result.platformShare).toBe(0.2);
    expect(result.salonShare).toBe(0.8);
    expect(result.total).toBe(1);
  });

  it("should handle large amounts", () => {
    const result = calculateRevenueShare(100000);
    expect(result.platformShare).toBe(20000);
    expect(result.salonShare).toBe(80000);
    expect(result.total).toBe(100000);
  });

  it("should ensure platformShare + salonShare ≈ total (rounding tolerance)", () => {
    const amounts = [100, 299, 333, 500, 777, 1234, 9999];
    for (const amount of amounts) {
      const result = calculateRevenueShare(amount);
      expect(Math.abs(result.platformShare + result.salonShare - result.total)).toBeLessThanOrEqual(0.02);
    }
  });
});
