import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FormProvider from './src/components/CadastroRO/formProvider';
import AuthNavigator from './src/components/MenuLateral/AuthNavigator';
import AppNavigator from './src/components/MenuLateral/AppNavigator';

const Stack = createNativeStackNavigator();

// App.tsx

export default function App() {
  return (
    <FormProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
}







