import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton";
import { colors } from "@/theme/colors";

export default function RideConfirmationScreen() {
  const { fare, rideId } = useLocalSearchParams<{ fare?: string; rideId?: string }>();
  const matched = rideId && rideId !== "unmatched";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ride Confirmation</Text>
      <Text style={styles.subtitle}>{matched ? "Driver matched" : "Searching nearby drivers"}</Text>
      <View style={styles.card}>
        <Text style={styles.item}>Estimated Fare: INR {fare ?? "--"}</Text>
        <Text style={styles.item}>Driver: Ravi Kumar (4.9 star)</Text>
        <Text style={styles.item}>Vehicle: Swift Dzire, KA-01-AB-1234</Text>
        <Text style={styles.item}>ETA: 6 min</Text>
      </View>
      <PrimaryButton label="Pay with UPI / Card" onPress={() => {}} />
      <Text style={styles.footnote}>Payment gateway integration point: Razorpay / Stripe / Cashfree.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20, gap: 12 },
  title: { fontSize: 28, fontWeight: "800", color: colors.textPrimary },
  subtitle: { fontSize: 16, color: colors.textSecondary },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    gap: 8,
    marginBottom: 8
  },
  item: { fontSize: 15, color: colors.textPrimary },
  footnote: { marginTop: 8, fontSize: 13, color: colors.textSecondary }
});
