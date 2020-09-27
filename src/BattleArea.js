import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Choice from "./Choice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
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
class BattleArea extends Component {
  state = {
    playerChoice: { label: "rock", index: 0 },
    computerChoice: { label: "rock", index: 0 },
    options: [
      { label: "rock", url: "../assets/ClipartKey_900256.png" },
      { label: "paper", url: "../assets/ClipartKey_1094264.png" },
      { label: "scissor", url: "../assets/ClipartKey_1094404.png" },
    ],
  };
  onPressHandler = (input, index) => {
    this.setState({ playerChoice: { label: input, index: index } });
  };

  render() {
    const playerChoice = this.state.playerChoice.label;
    let playerChoiceImage, computerChoiceImage, Result;
    const computerChoiceInNumber = Math.floor(Math.random() * 3);
    const computerChoice = this.state.options[computerChoiceInNumber].label;
    let resultImage = (
      <Image
        resizeMode="contain"
        style={styles.versus}
        source={require("../assets/vs.png")}
      />
    );

    if (computerChoice === "rock" && playerChoice === "paper") Result = "win";
    else if (computerChoice === "rock" && playerChoice === "scissor")
      Result = "lose";
    else if (computerChoice === "rock" && playerChoice === "rock")
      Result = "draw";
    else if (computerChoice === "paper" && playerChoice === "paper")
      Result = "draw";
    else if (computerChoice === "paper" && playerChoice === "rock")
      Result = "lose";
    else if (computerChoice === "paper" && playerChoice === "scissor")
      Result = "win";
    else if (computerChoice === "scissor" && playerChoice === "paper")
      Result = "lose";
    else if (computerChoice === "scissor" && playerChoice === "rock")
      Result = "win";
    else if (computerChoice === "scissor" && playerChoice === "scissor")
      Result = "draw";

    if (Result === "win")
      resultImage = (
        <Image
          resizeMode="contain"
          style={styles.versus}
          source={require("../assets/chess.png")}
        />
      );
    else if (Result === "lose")
      resultImage = (
        <Image
          resizeMode="contain"
          style={styles.versus}
          source={require("../assets/lose.png")}
        />
      );
    else
      resultImage = (
        <Image
          resizeMode="contain"
          style={styles.versus}
          source={require("../assets/blades.png")}
        />
      );
    if (computerChoiceInNumber === 0)
      computerChoiceImage = (
        <Image
          style={styles.choiceImage}
          source={require("../assets/ClipartKey_900256.png")}
          resizeMode="contain"
        />
      );
    if (computerChoiceInNumber === 1)
      computerChoiceImage = (
        <Image
          style={styles.choiceImage}
          source={require("../assets/ClipartKey_1094264.png")}
          resizeMode="contain"
        />
      );
    if (computerChoiceInNumber === 2)
      computerChoiceImage = (
        <Image
          style={styles.choiceImage}
          source={require("../assets/ClipartKey_1094404.png")}
          resizeMode="contain"
        />
      );

    if (this.state.playerChoice.index === 0)
      playerChoiceImage = (
        <Image
          style={styles.choiceImage}
          source={require("../assets/ClipartKey_900256.png")}
          resizeMode="contain"
        />
      );
    if (this.state.playerChoice.index === 1)
      playerChoiceImage = (
        <Image
          style={styles.choiceImage}
          source={require("../assets/ClipartKey_1094264.png")}
          resizeMode="contain"
        />
      );
    if (this.state.playerChoice.index === 2)
      playerChoiceImage = (
        <Image
          style={styles.choiceImage}
          source={require("../assets/ClipartKey_1094404.png")}
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
          {this.state.options.map((option, index) => {
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
