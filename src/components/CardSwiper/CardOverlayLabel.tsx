import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CardOverlayLabelProps {
  label: string;
  color: string;
}

export const CardOverlayLabel: React.FC<CardOverlayLabelProps> = ({
  label,
  color,
}) => {
  return (
    <View style={[styles.container, { borderColor: color }]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
