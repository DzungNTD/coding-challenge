/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {SCREEN} from '@constant/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UploadScreen} from '@screens';

const Stack = createNativeStackNavigator();
function UploadStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN.UPLOAD_SCREEN} component={UploadScreen} />
    </Stack.Navigator>
  );
}

export default UploadStack;
