import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/User/Login';
import CadastroUsuario from './src/components/User/CadastroUsuario';
import UserMenu from './src/components/User/UserMenu';
import RegistroOcorrenciaForm from './src/components/CadastroRO/RegistroOcorrenciaForm';
import AcompanharRO from './src/components/RO/RoTelas/AcompanharRO';
import RoAtendida from './src/components/RO/RoTelas/RoAtendida';
import RoAtendimento from './src/components/RO/RoTelas/RoAtendimento';
import RoPendente  from './src/components/RO/RoTelas/RoPendente';
import FormProvider from './src/components/CadastroRO/formProvider';
import AdminMenu from './src/components/Admin/AdminMenu/AdminMenu';
import DetalhesRoAtendida from './src/components/RO/RoDetalhes/DetalhesRoAtendida';
import DetalhesRoPendente from './src/components/RO/RoDetalhes/DetalhesRoPendente';
import DetalhesRoAtendimento from './src/components/RO/RoDetalhes/DetalhesRoAtendimento';
import AcompanharROAdm from './src/components/Admin/RO/RoTelas/AcompanharROAdm';
import RoPendenteUsers from './src/components/Admin/RO/RoTelas/RoPendenteUsers';
import RoAtendimentoUsers from './src/components/Admin/RO/RoTelas/RoAtendimentoUsers';
import RoAtendidaUsers from './src/components/Admin/RO/RoTelas/RoAtendidaUsers';
import ListaChat from './src/components/Chat/ListaChat';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FormProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AcompanharRO" component={AcompanharRO} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="UserMenu" component={UserMenu} />
        <Stack.Screen name="AdminMenu" component={AdminMenu} />
        <Stack.Screen name="CadastroRO" component={RegistroOcorrenciaForm} />

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
        <Stack.Screen name="ListaChat" component={ListaChat} />

        

      </Stack.Navigator>
    </NavigationContainer>
    </FormProvider>
  );
}
