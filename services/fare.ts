export const calculateFare = (distanceKm: number, demandMultiplier = 1): number => {
  const base = 35;
  const perKm = 14;
  const rawFare = (base + distanceKm * perKm) * demandMultiplier;
  return Math.round(rawFare);
};
