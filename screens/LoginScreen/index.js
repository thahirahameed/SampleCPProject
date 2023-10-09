import {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import {useUserContext} from '../../contexts/UserContext';
import Navigator from '../../navigation';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleValidation = () => {
    if (validateEmail(email)) {
      return true;
    } else {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={'https://picsum.photos/200/300'}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={{fontSize: 40, color: 'green', fontWeight: 'bold'}}>
            Welcome to the App
          </Text>
          <Text style={{fontSize: 30, color: 'blue', fontWeight: 'bold'}}>
            Please Login To Enter
          </Text>
        </View>
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
            if (handleValidation(email)) {
              setData(email);
              props.navigation.navigate('dashboardScreen');
            }
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
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
