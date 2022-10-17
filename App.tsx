import {SCREEN} from '@constant/index';
import {RootNavigation} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '@theme';
import React from 'react';
import {StatusBar} from 'react-native';
const AppStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={theme.color.white}
      />
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
