import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function AcompanharRO({navigation}) {
  return (
    <>
      <View style={styles.container2}>
        <View>
          <Text style={styles.titulo}>Acompanhe suas RO's</Text>
        </View>

        <TouchableOpacity style={styles.cards} onPress={ () => navigation.navigate('RoAtendida') }>
          <Text style={styles.ROAtendida}>Registros Atendidos</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.cards} onPress={ () => navigation.navigate( 'RoAtendimento' ) }>
          <Text style={styles.ROAtendimento}>Registros em Atendimento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cards} onPress={ () => navigation.navigate('RoPendente' ) }>
          <Text style={styles.ROPendente}>Registros Pendentes</Text>
        </TouchableOpacity>
      </View>

    </>
  );
}


const styles = StyleSheet.create({
  container2: {
    flex: 1,
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
