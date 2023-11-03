import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Market from './src/components/Market';
import Card from './src/components/Card';


function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Header/>
      <Market/>
      <Card/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 4,
    marginRight: 10,
    marginLeft: 10,
  },
  L1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
