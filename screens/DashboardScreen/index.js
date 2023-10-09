import {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {useUserContext} from '../../contexts/UserContext';

const DashboardScreen = () => {
  const [content, setContent] = useState(
    '\nWelcome. We are very happy to have you with us. Here is a little more information about who we are, and a few links about our story and success cases. We hope you find in our business what you are looking for. ',
  );

  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  return (
    <View>
      <View style={{marginStart: 150, marginBottom: 50}}>
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

      <Text>Welcome Back {data} !! You are logged in! </Text>

      <Text
        style={{
          backgroundColor: 'lightgrey',
          height: 100,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {content}
      </Text>
    </View>
  );
};

export default DashboardScreen;
