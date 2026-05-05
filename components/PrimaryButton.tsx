import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "@/theme/colors";

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
}

export function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center"
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  }
});
