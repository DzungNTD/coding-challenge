/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {SCREEN} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens';

const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREEN.HOME_SCREEN}
        component={HomeScreen}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            alert('kdasjfhkasdjhf');
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
