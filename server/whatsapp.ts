import { randomInt } from 'crypto';

export interface WhatsAppMessage {
  to: string;
  body: string;
}

export async function sendWhatsAppMessage(_msg: WhatsAppMessage): Promise<boolean> {
  return false;
}

export function generateOTP(): string {
  return randomInt(100000, 999999).toString();
}

export async function sendPasswordResetOTP(_phone: string, _otp: string): Promise<boolean> {
  return false;
}
