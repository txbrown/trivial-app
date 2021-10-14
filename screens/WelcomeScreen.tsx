import { NavigationState, useNavigation } from "@react-navigation/core";
import { Route } from "@react-navigation/native";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Headline, Paragraph, Text, Title } from "react-native-paper";
import Layout from "../components/Layout";
import {
  RootStackParamList,
  WelcomeScreenNavigationProp
} from "../navigation/types";

interface Props {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-between"
  },
  text: {
    textAlign: "center"
  }
});

const WelcomeScreen: React.FunctionComponent<Props> = (props) => {
  const { navigate } = useNavigation<WelcomeScreenNavigationProp>();
  return (
    <Layout>
      <View style={styles.container}>
        <Title style={styles.text}>Welcome to the Trivia Challenge</Title>

        <Paragraph style={styles.text}>
          You will be presented with 10 True or False questions
        </Paragraph>

        <Headline style={styles.text}>Can you score 100%?</Headline>

        <Button
          onPress={() => {
            navigate("Questions");
          }}
        >
          Begin
        </Button>
      </View>
    </Layout>
  );
};

export default WelcomeScreen;
