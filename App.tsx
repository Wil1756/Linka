import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.L1}>Linka</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  L1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
