import React from "react";
import { StyleSheet, Text } from "react-native";

interface TitleTextProps {
  children: React.ReactNode;
  style?: {};
}

const TitleText = ({ children, style }: TitleTextProps) => {
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
});

export default TitleText;
