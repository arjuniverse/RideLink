import { Alert, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { PrimaryButton } from "@/components/PrimaryButton";
import { colors } from "@/theme/colors";

export default function RidesScreen() {
  const { rides, offerRide } = useAppStore();
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [seats, setSeats] = useState("2");
  const [price, setPrice] = useState("150");

  const onOfferRide = () => {
    if (!pickup || !drop) {
      Alert.alert("Missing details", "Please fill pickup and drop locations.");
      return;
    }
    offerRide({
      driverId: "u_1",
      pickup,
      drop,
      dateTime: new Date().toISOString(),
      seatsAvailable: Number(seats) || 1,
      pricePerSeat: Number(price) || 100
    });
    setPickup("");
    setDrop("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Offer a Ride</Text>
      <TextInput placeholder="Pickup" style={styles.input} value={pickup} onChangeText={setPickup} />
      <TextInput placeholder="Drop" style={styles.input} value={drop} onChangeText={setDrop} />
      <View style={styles.row}>
        <TextInput
          placeholder="Seats"
          style={[styles.input, styles.flex]}
          value={seats}
          keyboardType="number-pad"
          onChangeText={setSeats}
        />
        <TextInput
          placeholder="Price / seat"
          style={[styles.input, styles.flex]}
          value={price}
          keyboardType="number-pad"
          onChangeText={setPrice}
        />
      </View>
      <PrimaryButton label="Post Ride" onPress={onOfferRide} />

      <Text style={styles.heading}>Available Rides</Text>
      <FlatList
        data={rides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rideCard}>
            <Text style={styles.rideTitle}>
              {item.pickup} to {item.drop}
            </Text>
            <Text style={styles.rideMeta}>Seats: {item.seatsAvailable}</Text>
            <Text style={styles.rideMeta}>INR {item.pricePerSeat} / seat</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16, gap: 10 },
  heading: { marginTop: 8, fontSize: 20, fontWeight: "800", color: colors.textPrimary },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  row: { flexDirection: "row", gap: 10 },
  flex: { flex: 1 },
  rideCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 14,
    marginTop: 10
  },
  rideTitle: { fontSize: 16, fontWeight: "700", color: colors.textPrimary },
  rideMeta: { fontSize: 14, color: colors.textSecondary, marginTop: 4 }
});
