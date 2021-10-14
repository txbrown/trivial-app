import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { defaultScreenOptions, Routes } from "./config";
import { RootStackParamList } from "./types";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { theme } from "../config/theme";
import WelcomeScreen from "../screens/WelcomeScreen";
import QuestionsScreen from "../screens/QuestionsScreen";
import ScoreScreen from "../screens/ScoreScreen";

const RootStack = createStackNavigator<RootStackParamList>();

const NavigationRoot = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName={Routes.Welcome}
          screenOptions={defaultScreenOptions}
        >
          <RootStack.Screen name={Routes.Welcome} component={WelcomeScreen} />
          <RootStack.Screen
            name={Routes.Questions}
            options={{
              ...defaultScreenOptions,
              headerBackTitle: "Quit",
              title: "You know it's trivial..."
            }}
            component={QuestionsScreen}
          />
          <RootStack.Screen
            name={Routes.Score}
            component={ScoreScreen}
            options={{
              ...defaultScreenOptions,
              headerBackTitleVisible: false,
              header: () => null
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default NavigationRoot;
