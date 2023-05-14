import React from 'react';
import { TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Badge } from 'react-native-elements';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdminMenu from '../Admin/AdminMenu/AdminMenu';
import AcompanharROAdm from '../Admin/RO/RoTelas/AcompanharROAdm';
import RoPendenteUsers from '../Admin/RO/RoTelas/RoPendenteUsers';
import RoAtendimentoUsers from '../Admin/RO/RoTelas/RoAtendimentoUsers';
import RoAtendidaUsers from '../Admin/RO/RoTelas/RoAtendidaUsers';
import SegurancaPrivacidade from '../SegurancaPrivacidade/SegurancaPrivacidade';
import Chat from '../Chat/Chat';
import Config from '../Config/Config';
import CardRoUsersAtendida from '../Admin/RO/Cards/CardRoUsersAtendida';
import CardRoUsersAtendimento from '../Admin/RO/Cards/CardRoUsersAtendimento';
import CardRoUsersPendente from '../Admin/RO/Cards/CardRoUsersPendente';
import CustomDrawerContent from './CustomDrawerContent'
import TermosPrivacidade from '../SegurancaPrivacidade/TermosPrivacidade';

const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const ROStack = createNativeStackNavigator();
const InicioStack = createNativeStackNavigator();

export default function AdminDrawerNavigation() {
    return (
      <Drawer.Navigator  screenOptions={{
        headerStyle: {
        backgroundColor: '#1D2045'},
        headerTintColor: 'white',
        headerTitle: '',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('UserMenu')}>
            <Icon name="bell" size={24} color="white" style={{marginRight: 15}}/>
            <Badge value={3} status="error"  containerStyle={{ position: 'absolute', top: -5, right:8 }}/> 
          </TouchableOpacity>
        ),
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
        >
        <Stack.Screen name="Bottomadm" component={AdminBottom} options={{drawerItemStyle: { display: 'none' }}}/>
        <Stack.Screen name="AcompanharROAdm" component={AcompanharROAdm} options={{drawerItemStyle: { display: 'none' }}}/>
  
        <Drawer.Screen name="Seguranca e Privacidade" component={SegurancaPrivacidade} options={{
            drawerIcon: () => (
              <Icon name="shield-account" size={25} color="#1D2045" style={{marginLeft: -3}} />
            ),
            drawerLabelStyle: {
              marginLeft: -15,
            },
          }}/>
        <Drawer.Screen name="Configurações da Conta" component={Config} options={{
            drawerIcon: () => (
              <Icon name="account-cog" size={25} color="#1D2045" />
            ),
            drawerLabelStyle: {
              marginLeft: -15,
            },
          }}/>
      </Drawer.Navigator>
    );
  }
  

  
  function AdminInicioStackScreen() {
    return (
      <InicioStack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <InicioStack.Screen name="HomeAdmin" component={AdminMenu} />
        <InicioStack.Screen name="AcompanharROAdm" component={AcompanharROAdm}/>
        <InicioStack.Screen name="Chat" component={Chat}/>
        
        <InicioStack.Screen name="TermosPrivacidade" component={TermosPrivacidade} />
        <InicioStack.Screen name="SegurancaPrivacidade" component={SegurancaPrivacidade} />
      </InicioStack.Navigator>
    );
  }
  
  
  function AdminROStackScreen() {
    return (
      <ROStack.Navigator screenOptions={{
        headerShown: false,
      }} >
        <ROStack.Screen name="TermosPrivacidade" component={TermosPrivacidade} />
        <ROStack.Screen name="SegurancaPrivacidade" component={SegurancaPrivacidade} />

        <ROStack.Screen name="AcompanharROAdm" component={AcompanharROAdm}/>
  
        <ROStack.Screen name="RoAtendidaUsers" component={RoAtendidaUsers} />
        <ROStack.Screen name="RoAtendimentoUsers" component={RoAtendimentoUsers} />
        <ROStack.Screen name="RoPendenteUsers" component={RoPendenteUsers} />
  
        <ROStack.Screen name="CardRoUsersAtendida" component={CardRoUsersAtendida} />
        <ROStack.Screen name="CardRoUsersAtendimento" component={CardRoUsersAtendimento} />
        <ROStack.Screen name="CardRoUsersPendente" component={CardRoUsersPendente} />
  
      </ROStack.Navigator>
    );
  }
  
  
  
  
  function AdminBottom(){
    return (
      <Bottom.Navigator
      screenOptions={{headerShown: false}}>
    <Bottom.Screen
    name="Início"
    component={AdminInicioStackScreen}
    options={{
      tabBarIcon: () => (
         <Icon name="home" size={25} color="#000000"/>
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
         <Icon name="message-text" size={25} color="#000000"/>
      ),
    }}
    />
    <Bottom.Screen
    name="Registros dos Usuários"
    component={AdminROStackScreen}
    options={{
      tabBarIcon: () => (
         <Icon name="file-multiple" size={25} color="#000000"/>
      ),
    }}
    />
      </Bottom.Navigator>
    );
  }
  