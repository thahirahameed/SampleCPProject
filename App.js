import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';

import {SafeAreaView, Text, View} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
