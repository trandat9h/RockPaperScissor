import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BattleArea from "./BattleArea";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameLogo: {
    height: 140,
    width: 400,
  },
});
class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode='contain' style={styles.gameLogo}  source={require('../assets/logo2.png')} />
        <BattleArea />
      </View>
    );
  }
}

export default Game;
