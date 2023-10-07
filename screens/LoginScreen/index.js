import {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useUserContext} from '../../contexts/UserContext';
import Navigator from '../../navigation';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  return (
    <View style={{flex: 1}}>
      <Text>Login</Text>

      <TextInput
        value={email}
        onChangeText={changedText => {
          setEmail(changedText);
        }}
        placeholder="Email"
        style={{
          backgroundColor: 'lightgrey',
          padding: 10,
          margin: 10,
          height: 40,
        }}
      />
      <TextInput
        value={password}
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        secureTextEntry
        placeholder="Password"
        style={{
          backgroundColor: 'lightgrey',
          padding: 10,
          margin: 10,
          height: 40,
        }}
      />

      <TouchableOpacity
        onPress={() => {
          setData(email);
          props.navigation.navigate('dashboardScreen');
        }}
        style={{
          marginHorizontal: 10,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightblue',
        }}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
