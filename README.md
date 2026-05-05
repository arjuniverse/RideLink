# RideLink

RideLink is a modern ride-sharing and carpooling mobile app MVP built with Expo + React Native + TypeScript.

## Included Features

- Authentication screen (email, phone, Google integration points)
- Home map with ride search
- Ride booking flow with confirmation
- Offer a ride flow for drivers
- Real-time style matching logic (mocked service)
- Fare estimation engine
- In-app messages screen
- User profile, verification and SOS placeholders
- Bottom tab navigation: Home, Rides, Messages, Profile

## Tech Stack

- Frontend: React Native (Expo + expo-router)
- State: Zustand
- Maps: react-native-maps
- Backend-ready integrations: Firebase Auth, payment SDK, notifications (scaffolded points)

## Run Locally

1. Install dependencies:
   - `npm install`
2. Start app:
   - `npm run start`
3. Open in Expo Go (Android/iOS) or emulator.

## Suggested Production Next Steps

- Replace mocked data with Firebase/Node APIs and Firestore/MongoDB.
- Enable real-time ride updates with WebSocket/Firebase listeners.
- Integrate Google Places + Directions API for route optimization.
- Add payment provider SDK (UPI/cards/wallets).
- Add push notifications, promo engine, and admin dashboard.
