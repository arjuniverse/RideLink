import { Ride } from "@/types";

export const findBestRide = (rides: Ride[], pickup: string, drop: string): Ride | null => {
  const directMatch = rides.find(
    (ride) =>
      ride.status === "open" &&
      ride.seatsAvailable > 0 &&
      ride.pickup.toLowerCase().includes(pickup.toLowerCase()) &&
      ride.drop.toLowerCase().includes(drop.toLowerCase())
  );
  return directMatch ?? rides.find((ride) => ride.status === "open" && ride.seatsAvailable > 0) ?? null;
};
