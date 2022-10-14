import {SCREEN} from '@constant/index';
import {RootNavigation} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
const AppStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name={SCREEN.ROOT_STACK} component={RootNavigation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
