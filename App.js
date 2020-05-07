/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuizScreen from './src/Quiz';
import Home from './src/Home';
import Result from './src/Result';

const Stack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{header: () => null}}/>
        <Stack.Screen name='QuizScreen' component={QuizScreen} options={{header: () => null}}/>
        <Stack.Screen name='Result' component={Result} options={{header: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
