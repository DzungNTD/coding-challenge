/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {SCREEN} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from '@screens';
const Stack = createNativeStackNavigator();
function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN.SEARCH_SCREEN} component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default SearchStack;
