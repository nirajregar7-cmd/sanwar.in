export interface WhatsAppMessage {
  to: string;
  body: string;
}

export async function sendWhatsAppMessage(_msg: WhatsAppMessage): Promise<boolean> {
  return false;
}

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendPasswordResetOTP(_phone: string, _otp: string): Promise<boolean> {
  return false;
}
