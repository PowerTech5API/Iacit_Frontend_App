import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function AcompanharRO({navigation}) {
  return (
    <>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.img1}>
          <Image source={require('../../../imgs/config.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.img2}>
          <Image source={require('../../../imgs/notificacao.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <View>
          <Text style={styles.titulo}>Acompanhe suas RO's</Text>
        </View>

        <TouchableOpacity style={styles.cards} onPress={ () => navigation.navigate('RoAtendida') }>
          <Text style={styles.ROAtendida}>Registros Atendidos</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.cards} onPress={ () => navigation.navigate('RoAtendimento') }>
          <Text style={styles.ROAtendimento}>Registros em Atendimento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cards} onPress={ () => navigation.navigate('RoPendente') }>
          <Text style={styles.ROPendente}>Registros Pendentes</Text>
        </TouchableOpacity>
      </View>
     
      <View style={styles.container3}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('UserMenu')}>
          <Image source={require('../../../imgs/inicio.png')} />
          <Text style={styles.buttonsText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Image source={require('../../../imgs/chat.png')} />
          <Text style={styles.buttonsText}>Chat</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('AcompanharRO')}>
          <Image source={require('../../../imgs/registros.png')} />
          <Text style={styles.buttonsText}>Registros</Text>
        </TouchableOpacity>
      </View>
    </>
  );
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
    paddingTop: '10%',
    alignItems: 'center',
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
