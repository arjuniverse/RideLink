import { create } from "zustand";
import { Ride, UserProfile } from "@/types";
import { calculateFare } from "@/services/fare";
import { findBestRide } from "@/services/matching";

interface BookingDraft {
  pickup: string;
  drop: string;
  dateTime: string;
}

interface AppState {
  currentUser: UserProfile | null;
  rides: Ride[];
  bookingDraft: BookingDraft;
  matchedRideId: string | null;
  setCurrentUser: (user: UserProfile) => void;
  updateBookingDraft: (draft: Partial<BookingDraft>) => void;
  requestRide: () => { rideId: string | null; estimatedFare: number };
  offerRide: (ride: Omit<Ride, "id" | "status" | "passengers">) => void;
}

const defaultUser: UserProfile = {
  id: "u_1",
  name: "Arjun Rider",
  email: "arjun@example.com",
  phone: "+91 90000 00000",
  role: "rider",
  licenseVerified: true,
  rating: 4.8
};

const initialRides: Ride[] = [
  {
    id: "ride_101",
    driverId: "d_4",
    pickup: "Indiranagar",
    drop: "Electronic City",
    dateTime: new Date().toISOString(),
    seatsAvailable: 3,
    pricePerSeat: 180,
    passengers: [],
    status: "open"
  }
];

export const useAppStore = create<AppState>((set, get) => ({
  currentUser: defaultUser,
  rides: initialRides,
  bookingDraft: {
    pickup: "",
    drop: "",
    dateTime: new Date().toISOString()
  },
  matchedRideId: null,
  setCurrentUser: (user) => set({ currentUser: user }),
  updateBookingDraft: (draft) =>
    set((state) => ({ bookingDraft: { ...state.bookingDraft, ...draft } })),
  requestRide: () => {
    const { rides, bookingDraft } = get();
    const matched = findBestRide(rides, bookingDraft.pickup, bookingDraft.drop);
    const estimatedFare = calculateFare(14, matched ? 1 : 1.25);
    set({ matchedRideId: matched?.id ?? null });
    return { rideId: matched?.id ?? null, estimatedFare };
  },
  offerRide: (rideData) =>
    set((state) => ({
      rides: [
        {
          ...rideData,
          id: `ride_${Date.now()}`,
          passengers: [],
          status: "open"
        },
        ...state.rides
      ]
    }))
}));
