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
import SegurancaPrivacidade from '../SegurancaPrivacidade/SegurancaPrivacidade';
import Chat from '../Chat/Chat';
import Config from '../Config/Config';
import CardRoAtendida from '../RO/Cards/CardRoAtendida';
import CardRoAtendimento from '../RO/Cards/CardRoAtendimento';
import CardRoPendente from '../RO/Cards/CardRoPendente';
import CustomDrawerContent from './CustomDrawerContent';
import TermosPrivacidade from '../SegurancaPrivacidade/TermosPrivacidade';
import Permissoes from '../SegurancaPrivacidade/Permissoes';
import { useNavigation } from '@react-navigation/native';
import ListaChat from '../Chat/ListaChat';
import RecorrerRo from '../User/RecorrerRo';

const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const ROStack = createNativeStackNavigator();
const InicioStack = createNativeStackNavigator();
const SegurancaStack = createNativeStackNavigator();
const ConfigStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();


export default function UserDrawerNavigator () {
  const navigation = useNavigation();
  const [badgeCount, setBadgeCount] = useState(3); // Valor inicial do badge, inserir contagem de notificações posteriormente

    return (
        <Drawer.Navigator screenOptions={{headerStyle: {backgroundColor: '#1D2045'},headerTintColor: 'white',headerTitle: '',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Configurações da Conta')}>
            <Icon name="bell" size={24} color="white" style={{marginRight: 15}}/>
            <Badge value={3} status="error"  containerStyle={{ position: 'absolute', top: -5, right:8 }}/>
          </TouchableOpacity>)}} drawerContent={props => <CustomDrawerContent {...props} />}>

          <Stack.Screen name="Bottom" component={UserBottom} options={{drawerItemStyle: { display: 'none' }}}/>

          <Drawer.Screen name="Segurança e Privacidade" component={SegurancaStackScreen} options={{
                drawerIcon: () => (
                  <Icon name="shield-account" size={25} color="#1D2045" style={{marginLeft: -3}} />
                ),drawerLabelStyle: { marginLeft: -15 }}}/>
          <Drawer.Screen name="Configurações da Conta" component={ConfigStackScreen} options={{
                drawerIcon: () => (
                  <Icon name="account-cog" size={25} color="#1D2045" />
                ),drawerLabelStyle: { marginLeft: -15}}}/>
        </Drawer.Navigator>
    );
  }

  function UserInicioStackScreen() {
    return (
      <InicioStack.Navigator screenOptions={{headerShown: false}}>
        <InicioStack.Screen name="Home" component={UserMenu} />
        <InicioStack.Screen name="AcompanharRO" component={AcompanharRO} />
        <InicioStack.Screen name="CadastroRO" component={RegistroOcorrenciaForm} />
      </InicioStack.Navigator>
    );
  }

  function ROStackScreen() {
    return (
      <ROStack.Navigator screenOptions={{headerShown: false}} >
        <ROStack.Screen name="AcompanharRO" component={AcompanharRO} />
        <ROStack.Screen name="RoAtendida" component={RoAtendida} />
        <ROStack.Screen name="DetalhesRoAtendida" component={DetalhesRoAtendida} />
        <ROStack.Screen name="CardRoAtendida" component={CardRoAtendida} />
        <ROStack.Screen name="RoAtendimento" component={RoAtendimento} />
        <ROStack.Screen name="DetalhesRoAtendimento" component={DetalhesRoAtendimento} />
        <ROStack.Screen name="CardRoAtendimento" component={CardRoAtendimento} />
        <ROStack.Screen name="RoPendente" component={RoPendente} />
        <ROStack.Screen name="DetalhesRoPendente" component={DetalhesRoPendente} />
        <ROStack.Screen name="CardRoPendente" component={CardRoPendente} />
        <ROStack.Screen name="RecorrerRo" component={RecorrerRo} />
      </ROStack.Navigator>
    );
  }

  function UserBottom(){
    return (
    <Bottom.Navigator screenOptions={{headerShown: false , style:{ backgroundColor:''}}}>
      <Bottom.Screen name="Início" component={UserInicioStackScreen}options={{tabBarIcon: () => (<Icon name="home" size={35} color="#1D2045"/>),style: {backgroundColor:'#1D2045'}}}/>
      <Bottom.Screen name="Chats" component={ChatStackScreen} options={{tabBarIcon: () => (<Icon name="message-text" size={30} color="#1D2045"/>),tabBarLabel: 'Chat'}}/>
      <Bottom.Screen name="Registros" component={ROStackScreen} options={{tabBarIcon: () => (<Icon name="file-multiple" size={25} color="#1D2045"/>)}}/>
    </Bottom.Navigator>
    );
  }

  function SegurancaStackScreen() {
    return (
      <SegurancaStack.Navigator screenOptions={{headerShown: false}}>
        <SegurancaStack.Screen name="SegurancaPrivacidade" component={SegurancaPrivacidade} />
        <SegurancaStack.Screen name="Permissões" component={Permissoes} />
        <SegurancaStack.Screen name="TermosPrivacidade" component={TermosPrivacidade} />
      </SegurancaStack.Navigator>
    );
  }

  function ConfigStackScreen() {
    return (
      <ConfigStack.Navigator screenOptions={{headerShown: false}}>
        <ConfigStack.Screen name="Config" component={Config} />
      </ConfigStack.Navigator>
    );
  }

  function ChatStackScreen() {
    return (
      <ChatStack.Navigator screenOptions={{headerShown: false}}>
        <ChatStack.Screen name="ListaChat" component={ListaChat} />
        <ChatStack.Screen name="Chat" component={Chat} />
      </ChatStack.Navigator>
    );
  }