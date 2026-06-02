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

export interface CashfreeOrderResponse {
  orderId: string;
  paymentSessionId: string;
  orderAmount: number;
  orderCurrency: string;
}

export interface CashfreeVerificationResponse {
  success: boolean;
  error?: string;
  orderStatus?: string;
  customerId?: string;
  transactionId?: string;
  paymentAmount?: number;
}

export interface CashfreeWebhookResponse {
  success: boolean;
  error?: string;
  orderStatus?: string;
  paymentAmount?: number;
}

export async function createCashfreeOrder(_data: CreateOrderData & { requestHost?: string }): Promise<CashfreeOrderResponse> {
  throw new Error('Payment gateway not configured.');
}

export async function verifyCashfreePayment(_orderId: string): Promise<CashfreeVerificationResponse> {
  return { success: false, error: 'Payment gateway not configured.' };
}

export function verifyCashfreeWebhookSignature(_rawBody: string, _signature: string, _timestamp: string): boolean {
  return false;
}

export async function processWebhookData(_data: unknown): Promise<CashfreeWebhookResponse> {
  return { success: false, error: 'Payment gateway not configured.' };
}

export async function refundCashfreePayment(_orderId: string, _refundAmount?: number): Promise<{ success: boolean; error?: string }> {
  return { success: false, error: 'Payment gateway not configured.' };
}

export async function initializeCashfree() {
  return null;
}

export const cashfree = null;
