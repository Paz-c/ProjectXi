import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RideScreen from './src/screens/RideScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RideHistory from './src/components/RideHistory';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
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
              component={RideScreen}
              options={{headerShown: null}}
            />
            <Stack.Screen
              name="HISTORY"
              component={RideHistory}
              //options={{headerShown: null}}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
