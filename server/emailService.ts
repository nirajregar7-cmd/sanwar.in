export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail(_msg: EmailMessage): Promise<boolean> {
  return false;
}

export async function sendEmailWithGmail(_to: string, _subject: string, _html: string): Promise<boolean> {
  return false;
}

export async function sendEmailVerificationOtp(_email: string, _otp: string, _userType: 'salon_owner' | 'brand_owner'): Promise<boolean> {
  return false;
}

export function generateBookingConfirmationEmail(_customerName: string, _salonName: string, _serviceName: string, _date: string, _time: string, _amount: string): string {
  return '';
}

export function generateBookingCancellationEmail(_customerName: string, _salonName: string, _serviceName: string, _date: string, _time: string): string {
  return '';
}
