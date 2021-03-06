import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

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
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg",
          // }}
          resizeMethod="resize"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.result}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{numberOfRounds}</Text> tries to guess
          the number <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={onRestartGame}>Play Again</MainButton>
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
  resultContainer: {
    marginHorizontal: 30,
    marginBottom: 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  result: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
