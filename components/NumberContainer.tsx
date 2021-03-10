import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

interface NumberContainerProps {
  children: React.ReactNode;
  style: {};
}
const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: colors.secondary,
    fontSize: 22,
  },
});

export default NumberContainer;
