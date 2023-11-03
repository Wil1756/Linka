import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Header: React.FC = () => {
  return (
    <View style={styles.container}>
        <Image 
            source={{uri: 'https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}
            style={styles.profilePicture}
       />
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Hi Wegner!!</Text>
        <Text style={styles.welcomeText}>Welcome back</Text>
      </View>
      <Icon name="eye" size={30} style={styles.settingsIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePicture: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 16,
  },
  settingsIcon: {
    marginLeft: 'auto', 
  },
});

export default Header;
