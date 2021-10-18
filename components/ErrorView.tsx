import * as React from "react";
import { View } from "react-native";
import { Button, Paragraph, Text } from "react-native-paper";
import Layout from './Layout';

interface Props {
  message: string;
  onTryAgain?: () => void;
}

const ErrorView: React.FunctionComponent<Props> = ({ message, onTryAgain }) => {
  return (
    <Layout>
    <View>
      <Paragraph>{message}</Paragraph>
      {onTryAgain && <Button onPress={onTryAgain}>Try again</Button>}
    </View>
    </Layout>
  );
};

export default ErrorView;
