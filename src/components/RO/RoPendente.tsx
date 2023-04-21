import React, { Component } from 'react';
import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import RO from './RO';

export default function RoPendente(){
  x=[]
    return(
        <>
        <View style={styles.container1}>
            <Image style={styles.img1} source={require('../../imgs/config.png')} />
            <Image
            style={styles.img2}
            source={require('../../imgs/notificacao.png')}
            />
        </View>

        <View style={styles.container2}>
          <ScrollView>
            <RO x={this.x[0]} projeto='Dinsey+' descricao='Problema de autenticação' status='Pendente' />
            <RO x={this.x[1]} projeto='HBO' descricao='Aplicativo não abre' status='Pendente' />
            <RO x={this.x[2]} projeto='Netlfix' descricao='Sem categoria x' status='Pendente' />
          </ScrollView>
        </View>

        <View style={styles.container3}>
            <View style={styles.button1}>
            <Image source={require('../../imgs/inicio.png')}></Image>
            <Text style={styles.buttonsText}>Inicio</Text>
            </View>
            <View style={styles.button2}>
            <Image source={require('../../imgs/chat.png')}></Image>
            <Text style={styles.buttonsText}>Chat</Text>
            </View>
            <View style={styles.button3}>
            <Image source={require('../../imgs/registros.png')}></Image>
            <Text style={styles.buttonsText}>Registros</Text>
            </View>
        </View>
        </>

        )
}

const styles = StyleSheet.create({
    container1: {
      flex: 0.1,
      flexDirection: 'row',
      backgroundColor: '#1D2045',
      alignItems: 'center',
      justifyContent: 'center',
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
  
    cards: {
      width: '90%',
      height: 70,
      backgroundColor: 'white',
      borderRadius: 4,
      justifyContent: 'center',
      shadowColor: '#000',
      elevation: 8,
      marginTop: '10%',
    },
  
    mid1Text: {
      marginTop: 5,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#6FCF97',
      textAlign: 'center',
      fontFamily: 'Inter',
    },
  
    container3: {
      flex: 0.1,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 5,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    
    button1: {
      flex: 0.33,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button2: {
      flex: 0.34,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button3: {
      flex: 0.33,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    buttonsText: {
      fontSize: 11,
      color: '#1E457E',
    },
  
    ROPendente: {
      color: '#EB5757',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
  
    },
    ROAtendimento: {
      color: '#F2C94C',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
  
    },
    ROAtendida:{
      color: '#6FCF97',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
  
    },
    titulo: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000'
    }
  
  });