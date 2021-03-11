import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";

interface MainButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const MainButton = ({ children, onPress }: MainButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
