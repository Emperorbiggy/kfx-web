import { UserRole } from "@/types/enum";
import { IUser } from "@/types/user";


const dummyUsers: IUser[] = [
  {
    id: "64b8e4d1f2a5d6c1b7e4f9a1", // MongoDB ObjectId style
    firstName: "Abdulrasaq",
    lastName: "Suleiman",
    email: "abdulrasaq.suleiman@example.com",
    phoneNumber: "+2348023989479",
    location: "Lagos, Nigeria",
    role: UserRole.ADMIN,
    balance: 12500.75,
    currency: "NGN",
    isVerified: true,
    isActive: true,
    createdAt: new Date("2025-03-14T10:30:00Z"),
    updatedAt: new Date("2025-08-10T15:45:00Z"),
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440000", // UUID style
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    phoneNumber: "+1-202-555-0199",
    location: "New York, USA",
    role: UserRole.MANAGER,
    balance: 502.5,
    currency: "USD",
    isVerified: false,
    isActive: true,
    createdAt: new Date("2024-12-01T08:15:00Z"),
    updatedAt: new Date("2025-08-01T09:25:00Z"),
  },
  {
    id: "7b9f7b8d9f8a4a2bb8a8b8a9",
    firstName: "Emeka",
    lastName: "Okafor",
    email: "emeka.okafor@example.com",
    phoneNumber: "+2348034567890",
    location: "Abuja, Nigeria",
    role: UserRole.MANAGER,
    balance: 78000,
    currency: "NGN",
    isVerified: true,
    isActive: false,
    createdAt: new Date("2023-07-20T12:00:00Z"),
    updatedAt: new Date("2025-07-25T11:00:00Z"),
  },
];

export default dummyUsers;
