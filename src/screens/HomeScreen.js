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
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import HomeMenuList from '../components/HomeMenuList';
import {API_KEY} from '@env';


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Project-Xi</Text>
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
            margin: 12
          },
        }}
        placeholder="Where From?"
        returnKeyType={'search'}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        query={{
          key: API_KEY,
          language: 'en',
        }}
        minLength={2}
        enablePoweredByContainer={false}
      />
      <HomeMenuList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    fontSize: 50,
    color: 'white',
    margin: 40,
    marginLeft: 20,
  },
});

export default HomeScreen;
