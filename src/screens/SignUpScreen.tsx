import FirebaseRecaptchaVerifierModal from "expo-firebase-recaptcha/build/FirebaseRecaptchaVerifierModal";
import {
  ApplicationVerifier,
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { firebaseConfig } from "../config/firebase";

const auth = getAuth();

// WIP: Refactor this, put error message in toast bus
export const SignUpScreen = ({}) => {
  const [verificationSent, setVerificationSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const recaptchaVerifier = React.useRef(null);

  const sendVerification = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current as unknown as ApplicationVerifier
      );
      setVerificationId(verificationId);
      setVerificationSent(true);
    } catch (error) {
      setErrorMessage(`error ${error}`);
    }
  };

  const confirmVerification = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      setErrorMessage("signed in");
    } catch (error) {
      setErrorMessage(`error ${error}`);
    }
  };

  if (!verificationSent) {
    return (
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification
        />
        <TextInput
          placeholder="+1 999 999 9999"
          autoFocus
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
        <Button
          disabled={!phoneNumber}
          title="Send verification code"
          onPress={sendVerification}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
        textContentType="oneTimeCode"
        keyboardType="numeric"
      />
      <Button
        disabled={!phoneNumber}
        title="Confirm verificationCode"
        onPress={confirmVerification}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    fontSize: 17,
  },
});
