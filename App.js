import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RideHistory from './src/components/RideHistory';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="HOME"
            component={HomeScreen}
            options={{headerShown: null}}
          />
          <Stack.Screen
            name="MAP"
            component={MapScreen}
            //options={{headerShown: null}}
          />
          <Stack.Screen
            name="HISTORY"
            component={RideHistory}
            //options={{headerShown: null}}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
