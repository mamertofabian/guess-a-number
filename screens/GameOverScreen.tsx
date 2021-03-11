import React from "react";
import { Button, StyleSheet, View } from "react-native";
import BodyText from "../components/BodyText";

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
      <BodyText>The Game is Over!</BodyText>
      <BodyText>Number of rounds: {numberOfRounds}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
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
