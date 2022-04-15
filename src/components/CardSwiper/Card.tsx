import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface CardProps {
  imageUri: string;
}

export const Card: React.FC<CardProps> = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUri }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 2,
    borderRadius: 5,
  },
  image: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
});
