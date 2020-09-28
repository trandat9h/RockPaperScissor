import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Choice from "./Choice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  choice: {
    flex: 1,
  },
  information: {
    height: 180,
    width: 380,
    flexDirection: "row",
    shadowColor: "#000",
    shadowRadius: 5,
    borderWidth: 2,
  },
  section: {
    flex: 1,
    alignItems: "center",
  },
  choiceContainer: {
    alignItems: "center",
  },
  versus: {
    flex: 1,
    width: 100,
    height: 100,
  },
  Text: {
    fontSize: 24,
  },
  choiceImage: {
    flex: 4,
    height: 90,
    margin: 10,
  },
});

const options = [
  { label: "rock", url: require("../assets/ClipartKey_900256.png") },
  { label: "paper", url: require("../assets/ClipartKey_1094264.png") },
  { label: "scissor", url: require("../assets/ClipartKey_1094404.png") },
];

const versus = [
  { label: "victory", url: require("../assets/chess.png") },
  { label: "defeated", url: require("../assets/lose.png") },
  { label: "tie", url: require("../assets/blades.png") },
]

const comparison = {
  paper: {
    rock: "victory",
    scissor: "defeated",
    paper: "tie",
  },
  rock: {
    paper: "defeated",
    scissor: "victory",
    rock: "tie",
  },
  scissor: {
    paper: "victory",
    rock: "defeated",
    scissor: "tie",
  },
};

class BattleArea extends Component {
  state = {
    playerChoice: { label: "rock", index: 0 },
  };
  onPressHandler = (input, index) => {
    this.setState({ playerChoice: { label: input, index: index } });
  };

  render() {
    const playerChoice = this.state.playerChoice.label;
    const computerChoice = options[Math.floor(Math.random() * 3)].label;
    const Result = comparison[`${playerChoice}`][`${computerChoice}`];
    const resultURI = versus.find(
      (option) => option.label === Result
    ).url;
    const resultImage = (
      <Image
        resizeMode="contain"
        style={styles.versus}
        source={resultURI}
      />
    );
    // get computer choice's Image
    const computerChoiceURI = options.find(
      (option) => option.label === computerChoice
    ).url;
    const computerChoiceImage = (
      <Image
        style={styles.choiceImage}
        source={computerChoiceURI}
        resizeMode="contain"
      />
    );
    // get player choice's Image
    const playerChoiceURI = options.find(
      (option) => option.label === playerChoice
    ).url;
    const playerChoiceImage = (
      <Image
        style={styles.choiceImage}
        source={playerChoiceURI}
        resizeMode="contain"
      />
    );

    return (
      <View style={styles.container}>
        <View style={styles.information}>
          <View style={styles.section}>
            <Text style={styles.Text}>Player</Text>
            {playerChoiceImage}
          </View>
          <View style={styles.section}>{resultImage}</View>
          <View style={styles.section}>
            <Text style={styles.Text}>Computer</Text>
            {computerChoiceImage}
          </View>
        </View>

        <View style={styles.choiceContainer}>
          {options.map((option, index) => {
            return (
              <Choice
                label={option.label}
                style={styles.choice}
                key={index}
                press={() => this.onPressHandler(option.label, index)}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

export default BattleArea;
