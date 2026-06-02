export interface CreateOrderData {
  amount: number;
  currency?: string;
  orderId?: string;
  customerDetails: {
    customerId: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
  };
  orderMeta?: {
    returnUrl?: string;
    notifyUrl?: string;
    paymentMethods?: string;
  };
  orderNote?: string;
}

export interface PaymentVerificationData {
  orderId: string;
  orderAmount: number;
  referenceId?: string;
  txStatus?: string;
  paymentMode?: string;
  txMsg?: string;
  txTime?: string;
  signature?: string;
}

export async function createCashfreeOrder(_data: CreateOrderData & { requestHost?: string }): Promise<never> {
  throw new Error('Payment gateway not configured.');
}

export async function verifyCashfreePayment(_orderId: string) {
  return { success: false, error: 'Payment gateway not configured.' };
}

export function verifyCashfreeWebhookSignature(_rawBody: string, _signature: string, _timestamp: string): boolean {
  return false;
}

export async function processWebhookData(_data: unknown) {
  return { success: false, error: 'Payment gateway not configured.' };
}

export async function refundCashfreePayment(_orderId: string, _refundAmount?: number) {
  return { success: false, error: 'Payment gateway not configured.' };
}

export async function initializeCashfree() {
  return null;
}

export const cashfree = null;
