import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import Component2 from './Component2';

import {UserContextProvider} from '../contexts/UserContext';

const Component1 = () => {
  const [user, setUser] = useState('Thahira');

  console.log('1 got rerendered');

  return (
    <View style={{backgroundColor: 'red', margin: 5}}>
      <TextInput
        value={user}
        onChangeText={changedText => {
          setUser(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 5, padding: 5}}
      />

      <UserContextProvider username={user}>
        <View>
          <Text>{`Hello ${user}!`}</Text>
        </View>
        <Component2 />
      </UserContextProvider>
    </View>
  );
};

export default Component1;
