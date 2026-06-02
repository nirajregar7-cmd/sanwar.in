export interface CashfreeOrderData {
  orderId: string;
  paymentSessionId: string;
  orderAmount: number;
  orderCurrency: string;
  gateway: 'cashfree';
}

export interface PaymentOptions {
  orderData: CashfreeOrderData;
  customerDetails: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
  };
  onSuccess: (data: any) => void;
  onFailure: (data: any) => void;
}

export const loadCashfreeSDK = (): Promise<void> => Promise.resolve();

export const initiateCashfreePayment = async (options: PaymentOptions) => {
  options.onFailure({ error: 'Payment gateway not configured.' });
};

export const verifyCashfreePayment = async (_orderId: string) => {
  throw new Error('Payment gateway not configured.');
};
