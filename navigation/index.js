import {useState, useEffect} from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DashboardScreen, LoginScreen} from '../screens';
import {useUserContext} from '../contexts/UserContext';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);

  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  useEffect(() => {
    fetchUserEmail();
  }, [data]);

  const fetchUserEmail = async () => {
    //const userEmail = await PersistanceHelper.getValue('userEmail');

    userEmail = data;
    if (userEmail && userEmail.length > 0) {
      setIsUserLoggedin(true);
    } else {
      setIsUserLoggedin(false);
    }
  };

  const screens = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="dashboardScreen"
          component={DashboardScreen}
          options={{title: 'Dashboard Screen'}}
        />
      </Stack.Group>
    );
  };

  const loginStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isUserLoggedin ? screens() : loginStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
