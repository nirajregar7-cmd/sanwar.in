export const sendWelcomeEmail = async (
  _userEmail: string,
  _userName: string,
  _userType: 'customer' | 'salon_owner' | 'brand_owner'
): Promise<boolean> => false;

export const sendDiscountCardEmail = async (
  _customerEmail: string,
  _salonName: string,
  _discountPercentage: number,
  _cardId: string
): Promise<boolean> => false;

export const testEmailConnection = async (): Promise<boolean> => false;
