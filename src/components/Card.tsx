import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card: React.FC = () => {
  return (
    <View style={styles.card}>
      <View style={styles.card1}>
        <Text style={styles.title1}>Total M.Cap</Text>
        <Text style={styles.currency1}>$2.25T</Text>
        <View style={styles.graph}></View>
        <TouchableOpacity style={styles.percentChange1}>
          <Text style={styles.percentChangeText}>+3.46%</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card2}>
        <Text style={styles.title2}>Defi Cap</Text>
        <Text style={styles.currency2}>$38.7B</Text>
        <View style={styles.graph}></View>
        <TouchableOpacity style={styles.percentChange2}>
          <Text style={styles.percentChangeText2}>-7.54%</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    gap: 8,
  },
  card1: {
    flex: 1,
    backgroundColor: '#64FFE3',
    padding: 16,
    borderRadius: 20,
  },
  card2: {
    flex: 1,
    backgroundColor: '#3640F0',
    padding: 16,
    borderRadius: 20,
  },
  title1: {
    fontSize: 15,
    marginBottom: 8,
  },
  title2: {
    fontSize: 15,
    marginBottom: 8,
    color: 'white',
  },
  currency1: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 8,
  },
  currency2: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 8,
    color: 'white',
  },
  graph: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
  },
  percentChange1: {
    backgroundColor: '#57d9c1',
    borderRadius: 20,
    padding: 8,
    width: '60%',
    alignItems: 'center',
  },
  percentChange2: {
    backgroundColor: '#3039cb',
    borderRadius: 20,
    padding: 8,
    width: '60%',
    alignItems: 'center',
  },
  percentChangeText: {
    fontSize: 15,
    color: 'black',
  },
  percentChangeText2: {
    fontSize: 15,
    color: 'white',
  },
});

export default Card;
