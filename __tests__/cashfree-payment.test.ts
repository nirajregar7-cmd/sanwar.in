import { describe, it, expect } from "vitest";
import {
  createCashfreeOrder,
  verifyCashfreePayment,
  verifyCashfreeWebhookSignature,
  processWebhookData,
  refundCashfreePayment,
  initializeCashfree,
  cashfree,
} from "../server/cashfree-payment";

describe("Cashfree payment stubs", () => {
  it("createCashfreeOrder should throw 'not configured'", async () => {
    await expect(
      createCashfreeOrder({
        amount: 300,
        customerDetails: {
          customerId: "cust-1",
          customerName: "Test",
          customerEmail: "test@example.com",
          customerPhone: "+911234567890",
        },
      }),
    ).rejects.toThrow("Payment gateway not configured.");
  });

  it("verifyCashfreePayment should return unsuccessful", async () => {
    const result = await verifyCashfreePayment("order-123");
    expect(result.success).toBe(false);
    expect(result.error).toBe("Payment gateway not configured.");
  });

  it("verifyCashfreeWebhookSignature should return false", () => {
    expect(verifyCashfreeWebhookSignature("body", "sig", "ts")).toBe(false);
  });

  it("processWebhookData should return unsuccessful", async () => {
    const result = await processWebhookData({});
    expect(result.success).toBe(false);
    expect(result.error).toBe("Payment gateway not configured.");
  });

  it("refundCashfreePayment should return unsuccessful", async () => {
    const result = await refundCashfreePayment("order-123");
    expect(result.success).toBe(false);
    expect(result.error).toBe("Payment gateway not configured.");
  });

  it("initializeCashfree should return null", async () => {
    const result = await initializeCashfree();
    expect(result).toBeNull();
  });

  it("cashfree export should be null", () => {
    expect(cashfree).toBeNull();
  });
});
