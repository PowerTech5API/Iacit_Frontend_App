import 'react-native-gesture-handler';
import * as React from 'react';
import FormProvider from './src/components/CadastroRO/formProvider';
import AppNavigator from './src/components/MenuNavigation/AppNavigator';

export default function App() {
  return (
    <FormProvider>
          <AppNavigator />
    </FormProvider>
  );
}






