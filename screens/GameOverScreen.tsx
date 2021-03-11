import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface GameOverScreenProps {
  numberOfRounds: number;
  userNumber?: number;
  onRestartGame: () => void;
}

const GameOverScreen = ({
  numberOfRounds,
  userNumber,
  onRestartGame,
}: GameOverScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {numberOfRounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="Play Again" onPress={onRestartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
