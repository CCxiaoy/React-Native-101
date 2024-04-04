import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Details from './screens/Details';
import Home from './screens/Home';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Trending Products'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
