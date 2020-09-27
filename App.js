
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Game from './src/Game';

const marginTop = Constants.statusBarHeight;

export default function App() {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: marginTop,
  },
});
