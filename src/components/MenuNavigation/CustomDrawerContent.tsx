import React from 'react';
import { Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';


export default function CustomDrawerContent(props) {
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