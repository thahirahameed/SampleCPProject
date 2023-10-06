import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';
import {UserContextProvider} from './contexts/UserContext';

import {SafeAreaView, Text, View} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <Navigator />
      </UserContextProvider>
    </NavigationContainer>
  );
}

export default App;
