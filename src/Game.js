import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import BattleArea from "./BattleArea";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameLogo: {
    textAlign: "center",
    fontSize: 30,
  },
});
class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.gameLogo}> Rock-Paper-Scissor</Text>
        <BattleArea />
      </View>
    );
  }
}

export default Game;
