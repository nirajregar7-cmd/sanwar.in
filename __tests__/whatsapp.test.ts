import { describe, it, expect } from "vitest";
import { generateOTP, sendWhatsAppMessage, sendPasswordResetOTP } from "../server/whatsapp";

describe("generateOTP", () => {
  it("should return a 6-digit string", () => {
    const otp = generateOTP();
    expect(otp).toMatch(/^\d{6}$/);
  });

  it("should return a number between 100000 and 999999", () => {
    for (let i = 0; i < 100; i++) {
      const otp = Number(generateOTP());
      expect(otp).toBeGreaterThanOrEqual(100000);
      expect(otp).toBeLessThanOrEqual(999999);
    }
  });

  it("should produce varying values (not always the same)", () => {
    const otps = new Set<string>();
    for (let i = 0; i < 20; i++) {
      otps.add(generateOTP());
    }
    expect(otps.size).toBeGreaterThan(1);
  });
});

describe("sendWhatsAppMessage", () => {
  it("should return false (stub)", async () => {
    const result = await sendWhatsAppMessage({ to: "+91123456789", body: "test" });
    expect(result).toBe(false);
  });
});

describe("sendPasswordResetOTP", () => {
  it("should return false (stub)", async () => {
    const result = await sendPasswordResetOTP("+91123456789", "123456");
    expect(result).toBe(false);
  });
});
