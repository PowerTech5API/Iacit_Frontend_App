import 'react-native-gesture-handler';
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
import MenuLateral from './src/components/MenuLateral/MenuLateral';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Screen } from '@react-navigation/elements';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Screen>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
        }}
      >
        <Drawer.Screen name="RegistroOcorrenciaForm" component={RegistroOcorrenciaForm} />
      </Drawer.Navigator>
    </Screen>
  );
}



export default function App() {
  return (
    <FormProvider>
    <NavigationContainer>
      <MenuLateral/>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
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
      </Stack.Navigator>
    </NavigationContainer>
    </FormProvider>
  );
}






