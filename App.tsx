import 'react-native-gesture-handler';
import * as React from 'react';
import FormProvider from './src/components/CadastroRO/formProvider';
import AppNavigator from './src/components/MenuNavigation/AppNavigator';
import AuthProvider from './src/components/User/AuthProvider';
import {ConfigProvider} from  './src/contexts/configContext';


export default function App() {
  
  return (
    <AuthProvider>
    <ConfigProvider>
    <FormProvider>
          <AppNavigator/>
    </FormProvider>
    </ConfigProvider>
    </AuthProvider>
  );
}






