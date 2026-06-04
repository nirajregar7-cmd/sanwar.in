export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail(msg: EmailMessage): Promise<boolean> {
  // Development helper: when running locally, log the email and return success.
  // In production, this should be replaced with a real SMTP/Gmail implementation.
  try {
    if (process.env.NODE_ENV === 'development' || process.env.SHOW_OTP_IN_RESPONSE === 'true') {
      console.log('=== DEV EMAIL ===');
      console.log('To:', msg.to);
      console.log('Subject:', msg.subject);
      console.log('HTML:', msg.html);
      console.log('=== END DEV EMAIL ===');
      return true;
    }

    // Default fallback: log and return false so calling code can handle failures.
    console.log(`Email to ${msg.to}: ${msg.subject}`);
    return false;
  } catch (err) {
    console.error('sendEmail error:', err);
    return false;
  }
}

export async function sendEmailWithGmail(_to: string, _subject: string, _html: string): Promise<boolean> {
  // Placeholder for a Gmail implementation (e.g., using nodemailer).
  // For now, delegate to sendEmail to keep behavior consistent.
  return sendEmail({ to: _to, subject: _subject, html: _html });
}

export async function sendEmailVerificationOtp(_email: string, _otp: string, _userType: 'salon_owner' | 'brand_owner'): Promise<boolean> {
  const html = `<p>Your verification code is <strong>${_otp}</strong></p>`;
  return sendEmail({ to: _email, subject: 'Sanwar verification code', html });
}

export function generateBookingConfirmationEmail(_customerName: string, _salonName: string, _serviceName: string, _date: string, _time: string, _amount: string): string {
  return '';
}

export function generateBookingCancellationEmail(_customerName: string, _salonName: string, _serviceName: string, _date: string, _time: string): string {
  return '';
}
