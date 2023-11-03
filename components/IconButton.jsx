import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export function IconButton({ icon, onClick, color }) {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [
        styles.button,
        pressed ? { opacity: 0.7 } : null,
      ]}
      onPress={onClick}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
});
