import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Choice from "./Choice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choice: {
    flex: 1,
  },
  information: {
    height: 180,
    flexDirection: "row",
    backgroundColor: "aqua",
  },
  section: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    height: 120,
  },
  choiceContainer: {
    backgroundColor: "green",
    alignItems: "center",
  },
  versus: {
    flex: 1,
    width: 1000,
    height: 1000,
  },
  Text: {
    fontSize: 25,
  },
});
class BattleArea extends Component {
  state = {
    playerChoice: { label:"rock", index: 0},
    computerChoice: {label: "rock", index: 0},
    options: [
      { label: "rock", url: "../assets/ClipartKey_900256.png" },
      { label: "paper", url: "../assets/ClipartKey_1094264.png" },
      { label: "scissor", url: "../assets/ClipartKey_1094404.png" },
    ],
  };
  onPressHandler = (input, index) => {
    this.setState({ playerChoice:{ label: input, index: index}});
  };

  render() {
    const playerChoice = this.state.playerChoice.label;
    const computerChoice = this.state.options[Math.floor(Math.random() * 3)]
      .label;
    let Result = (
      <Image
        resizeMode="contain"
        style={styles.versus}
        source={require("../assets/vs.png")}
      />
    );
    /*  if (computerChoice === "rock" && playerChoice === "paper")
      Result = "win";
    else if (computerChoice === "rock" && playerChoice === "scissor")
      Result = "lose";
    else if (computerChoice === "rock" && playerChoice === "rock")
      Result = "draw";
    else if (computerChoice === "paper" && playerChoice === "paper")
      Result = "draw";
    else if (computerChoice === "paper" && playerChoice === "rock")
      Result = "lose";
    else if (computerChoice === "paper" && playerChoice === "scissor")
      Result = "lose";
    else if (computerChoice === "scissor" && playerChoice === "paper")
      Result = "lose";
    else if (computerChoice === "scissor" && playerChoice === "rock")
      Result = "win";
    else if (computerChoice === "scissor" && playerChoice === "scissor")
      Result = "draw";   */
    const playerChoiceImage = (<Image source={require(`${this.state.options.url[this.state.playerChoice.index]}`)} />);
    return (
      <View style={styles.container}>
        <View style={styles.information}>
          <View style={styles.section}>
            <Text style={styles.Text}>Player</Text>
             {playerChoiceImage}
          </View>
          <View style={styles.section}>{Result}</View>
          <View style={styles.section}>
            <Text style={styles.Text}>Computer</Text>
            <Text> {computerChoice}</Text>
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
