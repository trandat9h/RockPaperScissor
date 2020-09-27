import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 80,
    backgroundColor: "aqua",
    margin: 10,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 40,
  },
});

const Choice = ({ label, press }) => {
  return (
    <TouchableOpacity onPress={press} style={styles.container}>
      <Text> {label}</Text>
    </TouchableOpacity>
  );
};

export default Choice;
