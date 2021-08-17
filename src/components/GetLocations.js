import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import GooglePlacesDestination from './GooglePlacesDestination';
import GooglePlacesOrigin from './GooglePlacesOrigin';

const GetLocations = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>HELLO CHRISTOPHER!</Text>
      <GooglePlacesOrigin style={inputStyles} />
      <GooglePlacesDestination style={inputStyles} />
      <Button onPress={() => navigation.navigate('SELECTRIDE')} title="GO" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  hello: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    // marginTop: 10
  },
  googleEdits: {
    //height: 200,
    borderWidth: 1,
  },
});

const inputStyles = StyleSheet.create({
  container: {
    margin: 12,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
  },
});

export default GetLocations;
