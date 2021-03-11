import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

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
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // source={require("../assets/success.png")}
          source={{
            uri:
              "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg",
          }}
          resizeMethod="resize"
        />
      </View>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
