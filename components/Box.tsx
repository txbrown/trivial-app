import * as React from "react";
import { View } from "react-native";

interface Props {
  center?: boolean;
}

const Box: React.FunctionComponent<Props> = ({ center, children }) => {
  return (
    <View style={{ alignItems: center ? "center" : "baseline" }}>
      {children}
    </View>
  );
};

export default Box;
