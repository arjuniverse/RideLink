import { StyleSheet, Switch, Text, View } from "react-native";
import { colors } from "@/theme/colors";
import { useAppStore } from "@/store/useAppStore";

export default function ProfileScreen() {
  const user = useAppStore((state) => state.currentUser);
  if (!user) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Name: {user.name}</Text>
        <Text style={styles.label}>Email: {user.email}</Text>
        <Text style={styles.label}>Phone: {user.phone}</Text>
        <Text style={styles.label}>License Verified: {user.licenseVerified ? "Yes" : "No"}</Text>
        <Text style={styles.label}>Rating: {user.rating}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Safety</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Emergency SOS</Text>
          <Switch value />
        </View>
        <Text style={styles.helper}>Triggers emergency contacts + live ride location sharing.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Payments</Text>
        <Text style={styles.helper}>UPI, cards, and wallets can be managed here.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16, gap: 12 },
  title: { fontSize: 24, fontWeight: "800", color: colors.textPrimary },
  subtitle: { fontSize: 18, fontWeight: "700", color: colors.textPrimary },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    gap: 6
  },
  label: { color: colors.textPrimary, fontSize: 15 },
  helper: { color: colors.textSecondary, fontSize: 13 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }
});
