export type UserRole = "rider" | "driver";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  photoUrl?: string;
  role: UserRole;
  vehicle?: {
    model: string;
    plate: string;
    seats: number;
  };
  licenseVerified: boolean;
  rating: number;
}

export interface Ride {
  id: string;
  driverId: string;
  pickup: string;
  drop: string;
  dateTime: string;
  seatsAvailable: number;
  pricePerSeat: number;
  passengers: string[];
  status: "open" | "matched" | "ongoing" | "completed";
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  timestamp: string;
}
