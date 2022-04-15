import Constants from "expo-constants";
import { FirebaseOptions } from "firebase/app";

export const firebaseConfig: FirebaseOptions = {
  ...Constants.manifest?.extra?.firebase,
};
