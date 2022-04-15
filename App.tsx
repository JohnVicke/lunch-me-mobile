import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { firebaseConfig } from "./src/config/firebase";
import { AuthenticationSwitch } from "./src/navigation/AuthenticationSwitch";
import { NavigationContainer } from "@react-navigation/native";

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <AuthenticationSwitch />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
