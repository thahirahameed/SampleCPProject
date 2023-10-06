import {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import Navigator from '../../navigation';
import {useUserContext} from '../../contexts/UserContext';

const HomeScreen = props => {
  const [textInput, setTextInput] = useState('Thahira');
  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  return (
    <View style={{flex: 1, backgroundColor: 'pink', margin: 5}}>
      <TextInput
        value={textInput}
        onChangeText={changedText => {
          setTextInput(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 5, padding: 5}}
      />

      <View>
        <Text>{`The data is ${data}!`}</Text>
      </View>

      <View>
        <TouchableOpacity
          style={{backgroundColor: 'red', height: 40, margin: 10}}
          onPress={() => {
            setData(textInput);
            props.navigation.navigate('detailScreen');
          }}>
          <Text>Send to Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
