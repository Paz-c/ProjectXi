import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import GetLocations from '../components/GetLocations';
import MapComponent from '../components/Map';
import SelectRide from '../components/SelectRide';

const RideScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={styles.mapHalf}>
        <MapComponent />
      </View>
      <SafeAreaView style={styles.detsHalf}>
        <Stack.Navigator>
          <Stack.Screen
            name="GETLOCATIONS"
            component={GetLocations}
            options={{headerShown: null}}
          />
          <Stack.Screen
            name="SELECTRIDE"
            component={SelectRide}
            options={{headerShown: null}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapHalf: {
    height: '50%',
    backgroundColor: 'blue',
  },
  detsHalf: {
    height: '50%',
  },
});

export default RideScreen;
