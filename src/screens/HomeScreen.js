import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import HomeMenuList from '../../HomeMenuList';


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.logo}>Project-Xi</Text>
      <HomeMenuList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  logo: {
    fontSize: 50,
    color: 'white',
    marginTop: 40,
  },
});

export default HomeScreen;
