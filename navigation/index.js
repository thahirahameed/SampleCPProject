import {} from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const screens = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen
          name="detailScreen"
          component={DetailScreen}
          options={{title: 'Detail Screen'}}
        />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator initialRouteName="homeScreen">{screens()}</Stack.Navigator>
  );
};

export default Navigator;
