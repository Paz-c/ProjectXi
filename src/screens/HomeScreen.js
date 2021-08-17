import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import GooglePlaces from '../components/GooglePlacesOrigin';
import HomeMenuList from '../components/HomeMenuList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Project-Xi</Text>
      <HomeMenuList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    fontSize: 50,
    color: 'black',
    margin: 40,
    marginLeft: 20,
  },
});

export default HomeScreen;
