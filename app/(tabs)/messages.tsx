import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { colors } from "@/theme/colors";

const initialMessages = [
  { id: "m1", sender: "Driver Ravi", text: "I am 5 minutes away." },
  { id: "m2", sender: "You", text: "Great, I am near the gate." }
];

export default function MessagesScreen() {
  const [draft, setDraft] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>In-App Chat</Text>
      <FlatList
        data={initialMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.sender}>{item.sender}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        value={draft}
        onChangeText={setDraft}
        placeholder="Type your message..."
        style={styles.input}
      />
      <Text style={styles.note}>Call integration point: Twilio / Agora SDK.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  title: { fontSize: 24, fontWeight: "800", color: colors.textPrimary, marginBottom: 12 },
  message: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 12,
    marginBottom: 10
  },
  sender: { fontWeight: "700", color: colors.primary, marginBottom: 3 },
  text: { color: colors.textPrimary },
  input: {
    marginTop: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: colors.border,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  note: { marginTop: 8, color: colors.textSecondary, fontSize: 12 }
});
