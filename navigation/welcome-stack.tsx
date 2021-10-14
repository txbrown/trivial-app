import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import { defaultScreenOptions, Routes } from "./config";

const WelcomeStack = createStackNavigator();

function WelcomeStackScreen() {
  return (
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen
        options={defaultScreenOptions}
        name={Routes.Welcome}
        component={WelcomeScreen}
      />
    </WelcomeStack.Navigator>
  );
}

export default WelcomeStackScreen;
