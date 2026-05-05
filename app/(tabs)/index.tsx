import { useMemo, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "@/components/PrimaryButton";
import { useAppStore } from "@/store/useAppStore";
import { colors } from "@/theme/colors";

export default function HomeScreen() {
  const { updateBookingDraft, requestRide } = useAppStore();
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const region = useMemo(
    () => ({
      latitude: 12.9716,
      longitude: 77.5946,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    }),
    []
  );

  const onFindRide = () => {
    if (!pickup.trim() || !drop.trim()) {
      Alert.alert("Missing details", "Please enter pickup and drop locations.");
      return;
    }
    updateBookingDraft({ pickup, drop, dateTime: new Date().toISOString() });
    const result = requestRide();
    router.push({
      pathname: "/ride-confirmation",
      params: { fare: String(result.estimatedFare), rideId: result.rideId ?? "unmatched" }
    });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        <Marker coordinate={{ latitude: 12.9716, longitude: 77.5946 }} title="You" />
      </MapView>
      <LinearGradient colors={["rgba(255,255,255,0.95)", "#FFFFFF"]} style={styles.panel}>
        <Text style={styles.heading}>Where to?</Text>
        <TextInput
          placeholder="Pickup location"
          value={pickup}
          onChangeText={setPickup}
          style={styles.input}
        />
        <TextInput placeholder="Drop location" value={drop} onChangeText={setDrop} style={styles.input} />
        <PrimaryButton label="Find Ride" onPress={onFindRide} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  map: { flex: 1 },
  panel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    gap: 12
  },
  heading: { fontSize: 24, fontWeight: "800", color: colors.textPrimary },
  input: {
    backgroundColor: "#F8FAFC",
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12
  }
});
