import React from "react";
import { StyleSheet, View } from "react-native";

import Colors from "../constants/colors";
import TitleText from "./TitleText";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
