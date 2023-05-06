import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import UserMenu from '../User/UserMenu';
import RegistroOcorrenciaForm from '../CadastroRO/RegistroOcorrenciaForm';
import AcompanharRO from '../RO/RoTelas/AcompanharRO';
import RoAtendida from '../RO/RoTelas/RoAtendida';
import RoAtendimento from '../RO/RoTelas/RoAtendimento';
import RoPendente  from '../RO/RoTelas/RoPendente';
import DetalhesRoAtendida from '../RO/RoDetalhes/DetalhesRoAtendida';
import DetalhesRoPendente from '../RO/RoDetalhes/DetalhesRoPendente';
import DetalhesRoAtendimento from '../RO/RoDetalhes/DetalhesRoAtendimento';
import AcompanharROAdm from '../Admin/RO/RoTelas/AcompanharROAdm';
import RoPendenteUsers from '../Admin/RO/RoTelas/RoPendenteUsers';
import RoAtendimentoUsers from '../Admin/RO/RoTelas/RoAtendimentoUsers';
import RoAtendidaUsers from '../Admin/RO/RoTelas/RoAtendidaUsers';
import CadastroUsuario from '../User/CadastroUsuario';
import Login from '../User/Login';
import SegurancaPrivacidade from '../SegurancaPrivacidade/SegurancaPrivacidade';
import AdminMenu from '../Admin/AdminMenu/AdminMenu';
import Chat from '../Chat/Chat';
import CardRoAtendida from '../RO/Cards/CardRoAtendida';
import CardRoAtendimento from '../RO/Cards/CardRoAtendimento';
import CardRoPendente from '../RO/Cards/CardRoPendente';


function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}} >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#1D2045'}}>
        <View style={{flexDirection: 'row',  alignItems: 'center'}}>
          <Image
            source={require('../../imgs/logo.png')}
            style={{width: 128, height: 66, margin:10, tintColor: '#fff'}}
          />
        </View>
          <Text
            style={{
              color: '#1D2045',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
              marginTop: 5,
              marginLeft: 5,
            }}>
            Nome do usuário
          </Text>

        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View>
      <DrawerItem
        label="Sair"
        onPress={() => props.navigation.navigate('Login')}
        icon={({color, size}) => (<Icon name="logout" size={25} color="#1D2045" />)}
        labelStyle={{ marginLeft: -15 }}
      />
    </View>
    </View>
  );
}

const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const ROStack = createNativeStackNavigator();
const InicioStack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{
            headerShown: false,
          }} >
      <Stack.Screen name="AuthNavigation" component={AuthNav} />
      <Drawer.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


function DrawerNavigation() {
  return (
    <Drawer.Navigator  screenOptions={{
      headerStyle: {
      backgroundColor: '#1D2045'},
      headerTintColor: 'white',
      headerTitle: '',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('UserMenu')}>
          <Icon name="bell" size={24} color="white" />
        </TouchableOpacity>
      ),
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
      >
      <Stack.Screen name="Bottom" component={BottomRoutes} options={{drawerItemStyle: { display: 'none' }}}/>
      <Stack.Screen name="AcompanharRO" component={AcompanharRO} options={{drawerItemStyle: { display: 'none' } }}/>
      <Stack.Screen name="CadastroRO" component={RegistroOcorrenciaForm} options={{drawerItemStyle: { display: 'none' }}}/>
      <Stack.Screen name="AcompanharROAdm" component={AcompanharROAdm} options={{drawerItemStyle: { display: 'none' }}}/>
      <Drawer.Screen name="Seguranca e Privacidade" component={SegurancaPrivacidade} options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="shield-account" size={25} color="#1D2045" />
          ),
          drawerLabelStyle: {
            marginLeft: -15,
          },
        }}/>
    </Drawer.Navigator>
  );
}

function InicioStackScreen() {
  return (
    <InicioStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <InicioStack.Screen name="Home" component={UserMenu} />
      <InicioStack.Screen name="AcompanharRO" component={AcompanharRO} />
      <InicioStack.Screen name="CadastroRO" component={RegistroOcorrenciaForm} />
    </InicioStack.Navigator>
  );
}


function ROStackScreen() {
  return (
    <ROStack.Navigator screenOptions={{
      headerShown: false,
    }} >
      <ROStack.Screen name="1" component={AcompanharRO} />
      <ROStack.Screen name="2" component={RoAtendida} />
      <ROStack.Screen name="3" component={RoAtendimento} />
      <ROStack.Screen name="4" component={RoPendente} />
      <ROStack.Screen name="5" component={RoAtendidaUsers} />
      <ROStack.Screen name="6" component={RoAtendimentoUsers} />
      <ROStack.Screen name="7" component={RoPendenteUsers} />
      <ROStack.Screen name="8" component={DetalhesRoAtendida} />
      <ROStack.Screen name="9" component={DetalhesRoAtendimento} />
      <ROStack.Screen name="10" component={DetalhesRoPendente} />
      <ROStack.Screen name="11" component={CardRoAtendida} />
      <ROStack.Screen name="12" component={CardRoAtendimento} />
      <ROStack.Screen name="13" component={CardRoPendente} />
    </ROStack.Navigator>
  );
}

function AuthNav(){
  return (
  <Stack.Navigator
  screenOptions={{
    headerShown: false,
  }}>
  <Stack.Screen name="Login" component={Login}  screenOptions={{
            headerShown: false,
          }}/>
  <Stack.Screen name="CadastroUsuario" component={CadastroUsuario}  screenOptions={{
            headerShown: false,
          }}/>
</Stack.Navigator>
  );
}

function BottomRoutes(){
  return (
    <Bottom.Navigator
    screenOptions={{headerShown: false ,style: { backgroundColor: '' } }}>
  <Bottom.Screen
  name="Início"
  component={InicioStackScreen}
  options={{
    tabBarIcon: () => (
       <Icon name="home" size={35} color="#1D2045"/>
  ),       style: {
    backgroundColor:'#1D2045',
  },
  }}
  />
      <Bottom.Screen
  name="Chat"
  component={Chat}
  options={{
    tabBarIcon: () => (
       <Icon name="message-text" size={30} color="#1D2045"/>
    ),
  }}
  />
  <Bottom.Screen
  name="Registros"
  component={ROStackScreen}
  options={{
    tabBarIcon: () => (
       <Icon name="file-multiple" size={25} color="#1D2045"/>
    ),
  }}
  />
    </Bottom.Navigator>
  );
}

function AdminBottom(){
  return (
    <Bottom.Navigator
    screenOptions={{headerShown: false}}>
  <Bottom.Screen
  name="AdminHome"
  component={AdminMenu}
  options={{
    tabBarIcon: () => (
       <Icon name="home" size={25} color="#000000"/>
  ),       style: {
    backgroundColor:'#1D2045',
  },
  }}
  />
    <Bottom.Screen
  name="ChatADM"
  component={Chat}
  options={{
    tabBarIcon: () => (
       <Icon name="message-square" size={25} color="#000000"/>
    ),
  }}
  />
  <Bottom.Screen
  name="AcompanharROADM"
  component={AcompanharROAdm}
  options={{
    tabBarIcon: () => (
       <Icon name="home" size={25} color="#000000"/>
    ),
  }}
  />
    </Bottom.Navigator>
  );
}

/* drawerItemStyle: { display: 'none' } para não aparecer o nome da tela*/
