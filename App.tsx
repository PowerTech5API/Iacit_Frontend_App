import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FormProvider from './src/components/CadastroRO/formProvider';
import AuthNavigator from './src/components/MenuLateral/AuthNavigator';
import AppNavigator from './src/components/MenuLateral/AppNavigator';
import AdminMenu from './src/components/Admin/AdminMenu/AdminMenu';
import DetalhesRoAtendida from './src/components/RO/RoDetalhes/DetalhesRoAtendida';
import DetalhesRoPendente from './src/components/RO/RoDetalhes/DetalhesRoPendente';
import DetalhesRoAtendimento from './src/components/RO/RoDetalhes/DetalhesRoAtendimento';
import AcompanharROAdm from './src/components/Admin/RO/RoTelas/AcompanharROAdm';
import RoPendenteUsers from './src/components/Admin/RO/RoTelas/RoPendenteUsers';
import RoAtendimentoUsers from './src/components/Admin/RO/RoTelas/RoAtendimentoUsers';
import RoAtendidaUsers from './src/components/Admin/RO/RoTelas/RoAtendidaUsers';
import SegurancaPrivacidade from './src/components/SegurancaPrivacidade/SegurancaPrivacidade';

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="UserMenu" component={UserMenu} />
        <Stack.Screen name="AdminMenu" component={AdminMenu} />
        <Stack.Screen name="CadastroRO" component={RegistroOcorrenciaForm} />
        <Stack.Screen name="AcompanharRO" component={AcompanharRO} />
        <Stack.Screen name="RoAtendida" component={RoAtendida} />
        <Stack.Screen name="RoAtendimento" component={RoAtendimento} />
        <Stack.Screen name="RoPendente" component={RoPendente} />
        <Stack.Screen name="DetalhesRoAtendimento" component={DetalhesRoAtendimento} />
        <Stack.Screen name="DetalhesRoPendente" component={DetalhesRoPendente} />
        <Stack.Screen name="DetalhesRoAtendida" component={DetalhesRoAtendida} />
        <Stack.Screen name="AcompanharROAdm" component={AcompanharROAdm} />
        <Stack.Screen name="RoPendenteUsers" component={RoPendenteUsers} />
        <Stack.Screen name="RoAtendimentoUsers" component={RoAtendimentoUsers} />
        <Stack.Screen name="RoAtendidaUsers" component={RoAtendidaUsers} />
        <Stack.Screen name="SegurancaPrivacidade" component={SegurancaPrivacidade} />
      </Stack.Navigator>
    </NavigationContainer>
    </FormProvider>
  );
}






