import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const navigationItems: string[] = ['Overview', 'News', 'Watchlist'];

const Markets: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <View style={[styles.container, { marginBottom: 4 }]}>
      <Text style={styles.title}>Markets</Text>
      <View style={[styles.navBar, styles.navBarWithBorder]}>
        {navigationItems.map((item: string, index: number) => (
          <TouchableOpacity
            key={index}
            style={
              index === selectedItem
                ? [styles.navButton, styles.navButtonSelected]
                : styles.navButton
            }
            onPress={() => {
              setSelectedItem(index); // Set the selected item index
            }}
          >
            <Text
              style={
                index === selectedItem
                  ? [styles.navText, styles.navTextSelected]
                  : styles.navText
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 10,
    marginRight:10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    padding:1,
  },
  navBarWithBorder: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
  },
  navButton: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  navButtonSelected: {
    backgroundColor: 'black',
  },
  navText: {
    color: 'black',
  },
  navTextSelected: {
    color: 'white',
  },
});

export default Markets;
