import { UserRole } from "./enum";

export type IUser = {
  id: string; // UUID or ObjectId
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  location: string;

  role: UserRole;

  balance: number; // current wallet balance
  currency: string; // e.g., "USD", "NGN"

  isVerified: boolean; // KYC status
  isActive: boolean; // account active/inactive
  plan?: string; // subscription plan

  createdAt: Date;
  updatedAt: Date;
};


