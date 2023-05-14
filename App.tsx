import 'react-native-gesture-handler';
import * as React from 'react';
import FormProvider from './src/components/CadastroRO/formProvider';
import AppNavigator from './src/components/MenuNavigation/AppNavigator';
import AuthProvider from './src/components/User/AuthProvider';



export default function App() {
  
  return (
    <AuthProvider>
    <FormProvider>
          <AppNavigator/>
    </FormProvider>
    </AuthProvider>
  );
}






