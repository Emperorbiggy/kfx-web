export type IUser = {
  id: string; // UUID or ObjectId
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  role: UserRole;

  balance: number; // current wallet balance
  currency: string; // e.g., "USD", "NGN"

  isVerified: boolean; // KYC status
  isActive: boolean; // account active/inactive

  createdAt: Date;
  updatedAt: Date;
};

export type UserRole = "admin" | "client";

