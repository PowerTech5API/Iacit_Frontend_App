import React, { useState, useEffect } from 'react';
import {View, Image, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UserMenu from '../User/UserMenu';


export default function ListaChat(props){
  const navigation = useNavigation();

  const {RO} = props;

    return(
        <>
          <View style={styles.container1}>
            <TouchableOpacity style={styles.img1}>
              <Image source={require('../../imgs/config.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.img2}>
              <Image source={require('../../imgs/notificacao.png')} />

            </TouchableOpacity>
          </View>

          <View style={styles.container2}>
            <TouchableOpacity>
              <View style={styles.mid1}>
                <ScrollView>
                  <Text style={styles.text}>RO: ID da RO {RO}</Text>
                </ScrollView>
              </View>
              </TouchableOpacity>
          </View>
          <UserMenu />
        </>
        )};


const styles = StyleSheet.create({
    container1: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#1D2045',
    alignItems: 'center',
    justifyContent: 'center',
    },

    texto:{
    fontSize: 15,
    color: 'black',
    },

    img1: {
    right: 100,
    },
    img2: {
    left: 100,
    },

    container2: {
    flex: 0.8,
    backgroundColor: '#F2F2F2',
    paddingTop: 10,
    },

text:{
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20, 
    color: 'black',
},

mid1: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    elevation: 8,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '5%',
    fontWeight: 'bold',  
}
});