import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

interface ILoadingViewProps {}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
const LoadingView: React.FunctionComponent<ILoadingViewProps> = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={Colors.red800} />
    </View>
  );
};

export default LoadingView;
