import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import UserMenu from './UserMenu';

export default function AcompanharRO() {
  return (
    <>
    <View>
        <Text style={styles.titulo}>Acompanhe suas RO's</Text>
    </View>

      <View style={styles.container1}>
        <View style={styles.mid1}>
          <Text style={styles.ROAtendida}>Registros Atendidos</Text>
        </View>

        <View style={styles.mid1}>
          <Text style={styles.ROAtendimento}>Registros em Atendimento</Text>
        </View>

        <View style={styles.mid1}>
          <Text style={styles.ROPendente}>Registros Pendentes</Text>
        </View>
      </View>
     

{/* menu navegavel da tela principal */}
      <View style={styles.container3}>
        <View style={styles.button1}>
          <Image source={require('../imgs/inicio.png')}></Image>
          <Text style={styles.buttonsText}>Inicio</Text>
        </View>
        <View style={styles.button2}>
          <Image source={require('../imgs/chat.png')}></Image>
          <Text style={styles.buttonsText}>Chat</Text>
        </View>
        <View style={styles.button3}>
          <Image source={require('../imgs/registros.png')}></Image>
          <Text style={styles.buttonsText}>Registros</Text>
        </View>
      </View>
    </>
  );
}






const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },


  mid1: {
    width: '90%',
    height: 70,
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    shadowColor: '#000',
    elevation: 8,
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
