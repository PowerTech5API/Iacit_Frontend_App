import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export default function Chats({ navigation }) {
  return (
    <>
      <View style={styles.container2}>
        <View>
          <Text style={styles.titulo}>Acompanhe seus Chats</Text>
        </View>

        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate('NovoChat')}
        >
          <View style={styles.IconRO}>
            <Text style={styles.RegistraRO}>Iniciar novo Chat</Text>
            <Image source={require('../../imgs/addRO.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate('ListaChat')} // Navegar para ListaChat
        >
          <Text style={styles.ROAtendida}>Chats Abertos</Text>
        </TouchableOpacity> 

        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate('ChatsEncerrados')} 
        >
          <Text style={styles.ROPendente}>Chats Encerrados</Text>
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
  RegistraRO:{
    color: '#1D2045',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 35,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000'
  },
  IconRO: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});
