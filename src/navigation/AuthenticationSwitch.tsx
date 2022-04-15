import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { LandingPage } from "./LandingPage";
import { MainNavigator } from "./MainNavigator";

export const AuthenticationSwitch = ({}): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  return <MainNavigator />;
};
