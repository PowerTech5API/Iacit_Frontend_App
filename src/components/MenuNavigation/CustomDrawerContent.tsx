import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../User/AuthProvider';
import {whiteLogo} from '../../imgs/Images'


export default function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const { name, email, clearEmail,clearName } = useAuth();

  // Função de logout
   async function handleLogout() {
    await AsyncStorage.removeItem('userToken');
    clearName();
    clearEmail();
    const userToken = await AsyncStorage.getItem("userToken")
    console.log('Logout realizado, token:', userToken);
    // Redirecionar para a tela de login
    navigation.navigate('Login');
  }

    return (
      <View style={styles.drawerStyle} >
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={whiteLogo}
              style={styles.logoStyle}
            />
          </View>
          <View style={styles.userName}>
          <Icon name="account" size={24} color="white" style={styles.iconStyle} />
            <Text style={styles.userNameText}>
            Bem-vindo(a)!
            {/* {name}  */}
            </Text>
            </View>
          <View style={styles.itemList}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
  
        <View>
        <DrawerItem
          label="Sair"
          onPress={handleLogout}
          icon={({color, size}) => (<Icon name="logout" size={25} color="#1D2045" />)}
          labelStyle={{ marginLeft: -15 }}
        />
      </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    drawerStyle :{
      flex: 1
    },
    container: {
      backgroundColor: '#1D2045',
    },
    logoContainer: {
      flexDirection: 'row',  
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoStyle: { 
      width: 128, 
      height: 66, 
      margin:10, 
      tintColor: '#fff',
      alignItems: 'center'
    },
    iconStyle: {
      marginRight: 5, // Espaço entre o ícone e o texto
      marginLeft: 15,
    },
    userName: {
      flexDirection: 'row',
      color: 'white',
      fontSize: 18,
      fontFamily: 'Roboto-Medium',
      alignItems: 'center',
      marginBottom: 2,

    },
    userNameText: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Roboto-Medium',
      marginBottom: 5,
      marginTop: 2,
      marginLeft: 5,
    },
    itemList: {
      flex: 1, 
      backgroundColor: '#fff', 
      paddingTop: 10,
    },
    text: {
      fontSize: 16,
      marginBottom: 20,
      padding:10,
    },
  });
  