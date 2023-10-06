import {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import Navigator from '../../navigation';
import {useMyContext} from '../../contexts/MyContext';
import {UserContextProvider} from '../../contexts/UserContext';

const HomeScreen = props => {
  const [data, setData] = useState('Thahira');

  const sendData = () => {
    setData(data);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'pink', margin: 5}}>
      <TextInput
        value={data}
        onChangeText={changedText => {
          setData(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 5, padding: 5}}
      />

      <UserContextProvider username={data}>
        <View>
          <Text>{`The data is ${data}!`}</Text>
        </View>

        <View>
          <TouchableOpacity
            style={{backgroundColor: 'red', height: 40, margin: 10}}
            onPress={() => {
              sendData({data});
              props.navigation.navigate('detailScreen');
            }}>
            <Text>Send to Details</Text>
          </TouchableOpacity>
        </View>
      </UserContextProvider>
    </View>
  );
};

export default HomeScreen;
