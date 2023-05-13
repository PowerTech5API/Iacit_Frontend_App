import React, { useState } from 'react';
import { TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Badge } from 'react-native-elements';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserMenu from '../User/UserMenu';
import RegistroOcorrenciaForm from '../CadastroRO/RegistroOcorrenciaForm';
import AcompanharRO from '../RO/RoTelas/AcompanharRO';
import RoAtendida from '../RO/RoTelas/RoAtendida';
import RoAtendimento from '../RO/RoTelas/RoAtendimento';
import RoPendente  from '../RO/RoTelas/RoPendente';
import DetalhesRoAtendida from '../RO/RoDetalhes/DetalhesRoAtendida';
import DetalhesRoPendente from '../RO/RoDetalhes/DetalhesRoPendente';
import DetalhesRoAtendimento from '../RO/RoDetalhes/DetalhesRoAtendimento';
import RoPendenteUsers from '../Admin/RO/RoTelas/RoPendenteUsers';
import RoAtendimentoUsers from '../Admin/RO/RoTelas/RoAtendimentoUsers';
import RoAtendidaUsers from '../Admin/RO/RoTelas/RoAtendidaUsers';
import SegurancaPrivacidade from '../SegurancaPrivacidade/SegurancaPrivacidade';
import Chat from '../Chat/Chat';
import Config from '../Config/Config';
import CardRoAtendida from '../RO/Cards/CardRoAtendida';
import CardRoAtendimento from '../RO/Cards/CardRoAtendimento';
import CardRoPendente from '../RO/Cards/CardRoPendente';
import CustomDrawerContent from './CustomDrawerContent'
import TermosPrivacidade from '../SegurancaPrivacidade/TermosPrivacidade';
import Permissoes from '../SegurancaPrivacidade/Permissoes';
import { useNavigation } from '@react-navigation/native';



const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const ROStack = createNativeStackNavigator();
const InicioStack = createNativeStackNavigator();


export default function UserDrawerNavigator () {
  const navigation = useNavigation();
  const [badgeCount, setBadgeCount] = useState(3); // Valor inicial do badge, inserir contagem de notificações posteriormente

    return (
        <Drawer.Navigator screenOptions={{headerStyle: {backgroundColor: '#1D2045'},headerTintColor: 'white',headerTitle: '',headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Configurações da Conta')}>
            <Icon name="bell" size={24} color="white" style={{marginRight: 15}}/>
            <Badge value={3} status="error"  containerStyle={{ position: 'absolute', top: -5, right:8 }}/> 
          </TouchableOpacity>)}} drawerContent={props => <CustomDrawerContent {...props} />}>
            <Stack.Screen name="Bottom" component={UserBottom} options={{drawerItemStyle: { display: 'none' }}}/> 
            <Stack.Screen name="AcompanharRO" component={AcompanharRO} options={{drawerItemStyle: { display: 'none' } }}/>
            <Stack.Screen name="CadastroRO" component={RegistroOcorrenciaForm} options={{drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="Segurança e Privacidade" component={SegurancaPrivacidade} options={{
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

function UserInicioStackScreen() {
    return (
      <InicioStack.Navigator screenOptions={{
        headerShown: false,
      }}>
    
        <InicioStack.Screen name="Home" component={UserMenu} />
        <InicioStack.Screen name="AcompanharRO" component={AcompanharRO} />
        <InicioStack.Screen name="CadastroRO" component={RegistroOcorrenciaForm} />
        <InicioStack.Screen name="TermosPrivacidade" component={TermosPrivacidade} />
        <InicioStack.Screen name="SegurancaPrivacidade" component={SegurancaPrivacidade} />
        <InicioStack.Screen name="Permissões" component={Permissoes} />
        
      </InicioStack.Navigator>
  
    );
  }

  function ROStackScreen() {
    return (
      <ROStack.Navigator screenOptions={{
        headerShown: false,
      }} >

        <ROStack.Screen name="AcompanharRO" component={AcompanharRO} />
        <ROStack.Screen name="RoAtendida" component={RoAtendida} />
        <ROStack.Screen name="RoAtendimento" component={RoAtendimento} />
        <ROStack.Screen name="RoPendente" component={RoPendente} />

        <ROStack.Screen name="RoAtendidaUsers" component={RoAtendidaUsers} />
        <ROStack.Screen name="RoAtendimentoUsers" component={RoAtendimentoUsers} />
        <ROStack.Screen name="RoPendenteUsers" component={RoPendenteUsers} />

        <ROStack.Screen name="DetalhesRoAtendida" component={DetalhesRoAtendida} />
        <ROStack.Screen name="DetalhesRoAtendimento" component={DetalhesRoAtendimento} />
        <ROStack.Screen name="DetalhesRoPendente" component={DetalhesRoPendente} />
        <ROStack.Screen name="CardRoAtendida" component={CardRoAtendida} />
        <ROStack.Screen name="CardRoAtendimento" component={CardRoAtendimento} />
        <ROStack.Screen name="CardRoPendente" component={CardRoPendente} />

        <ROStack.Screen name="Permissões" component={Permissoes} />
        <ROStack.Screen name="SegurancaPrivacidade" component={SegurancaPrivacidade} />
        <ROStack.Screen name="TermosPrivacidade" component={TermosPrivacidade} />
        
        
      </ROStack.Navigator>
    );
  }
  
  export function UserBottom(){
    return (
    <Bottom.Navigator screenOptions={{headerShown: false ,style: { backgroundColor: '' } }}>
      <Bottom.Screen name="Início" component={UserInicioStackScreen}options={{tabBarIcon: () => (<Icon name="home" size={35} color="#1D2045"/>),style: {backgroundColor:'#1D2045'}}}/>
      <Bottom.Screen name="Chat" component={Chat} options={{ tabBarVisible: false, tabBarIcon: () => (<Icon name="message-text" size={30} color="#1D2045"/>)}}/>
      <Bottom.Screen name="Registros" component={ROStackScreen} options={{tabBarIcon: () => (<Icon name="file-multiple" size={25} color="#1D2045"/>)}}/>
    </Bottom.Navigator>
    );
  }
