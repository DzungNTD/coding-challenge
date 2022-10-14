/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {SCREEN} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack} from './MainStack';

const RootStack = createNativeStackNavigator();
function RootNavigation() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={SCREEN.MAIN_STACK} component={MainStack} />
    </RootStack.Navigator>
  );
}

export default RootNavigation;
