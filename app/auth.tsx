import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { PrimaryButton } from "@/components/PrimaryButton";
import { colors } from "@/theme/colors";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to RideLink</Text>
      <Text style={styles.subtitle}>Login or sign up with email, phone, or Google.</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <PrimaryButton label="Continue with Email / Phone" onPress={() => {}} />
      <PrimaryButton label="Continue with Google" onPress={() => {}} />
      <Text style={styles.helper}>Firebase Auth integration point for OTP + Google sign-in.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20, gap: 10 },
  title: { fontSize: 30, fontWeight: "800", color: colors.textPrimary },
  subtitle: { fontSize: 15, color: colors.textSecondary, marginBottom: 10 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  helper: { marginTop: 8, color: colors.textSecondary, fontSize: 13 }
});
