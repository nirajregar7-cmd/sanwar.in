export interface BookingNotificationData {
  bookingId: string;
  customerName: string;
  customerEmail: string;
  salonName: string;
  serviceName: string;
  date: string;
  startTime: string;
  endTime: string;
  totalAmount: string;
  confirmationAmount: string;
  salonAddress?: string;
  salonPhone?: string;
}

export async function sendBookingConfirmationEmail(_data: BookingNotificationData): Promise<boolean> {
  return false;
}

export async function sendBookingReminderEmail(_data: BookingNotificationData): Promise<boolean> {
  return false;
}

export async function sendBookingCompletionEmail(_data: BookingNotificationData): Promise<boolean> {
  return false;
}

export async function getBookingNotificationData(_bookingId: string): Promise<BookingNotificationData | null> {
  return null;
}

export async function sendSalonOwnerBookingEmail(_data: {
  ownerEmail: string;
  ownerName: string;
  customerName: string;
  serviceName: string;
  date: string;
  startTime: string;
  salonName: string;
}): Promise<boolean> {
  return false;
}
