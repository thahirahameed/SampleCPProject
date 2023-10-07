import {} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {useUserContext} from '../../contexts/UserContext';

const DashboardScreen = () => {
  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  return (
    <View>
      <Text>Welcome Back!! You are logged in! </Text>

      <Text
        style={{
          backgroundColor: 'lightgrey',
          height: 40,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data}
      </Text>

      <View>
        <TouchableOpacity
          style={{
            height: 40,
            margin: 10,
            backgroundColor: 'lightblue',

            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setData('');
          }}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;
