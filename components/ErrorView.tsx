import * as React from "react";
import { View } from "react-native";
import { Button, Paragraph } from "react-native-paper";

interface Props {
  message: string;
  onTryAgain?: () => void;
}

const ErrorView: React.FunctionComponent<Props> = ({ message, onTryAgain }) => {
  return (
    <View>
      <Paragraph>{message}</Paragraph>;
      {onTryAgain && <Button onPress={onTryAgain}>Try again</Button>}
    </View>
  );
};

export default ErrorView;
