import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { FindMatchesScreen } from "../screens/FindMatchesScreen";

type RootStackParamList = {
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        animationEnabled: Platform.OS === "ios",
      }}
    >
      <Stack.Screen name="Main" component={FindMatchesScreen} />
    </Stack.Navigator>
  );
};
