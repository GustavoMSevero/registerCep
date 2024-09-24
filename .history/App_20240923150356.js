import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Form from './src/pages/Form';
import Ceps from './src/pages/Ceps';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Form'>
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Ceps' component={Ceps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}