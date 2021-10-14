import * as React from "react";
import { View, StyleSheet } from "react-native";

interface IWelcomeScreenProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32
  }
});

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;
