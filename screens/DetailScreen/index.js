import {} from 'react';
import {Text, View} from 'react-native';
import Component3 from '../../components/Component3';
import {useUserContext} from '../../contexts/UserContext';

const DetailScreen = () => {
  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  return (
    <View>
      <Text style={{backgroundColor: 'green', height: 40, margin: 10}}>
        {data}
      </Text>

      <View>
        <Text>Component3</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
