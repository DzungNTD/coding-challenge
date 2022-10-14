/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {SCREEN} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserScreen} from '@screens';

const Stack = createNativeStackNavigator();
function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN.USER_SCREEN} component={UserScreen} />
    </Stack.Navigator>
  );
}

export default UserStack;
