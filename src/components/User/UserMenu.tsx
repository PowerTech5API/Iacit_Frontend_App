import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function UserMenu() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.mid1} onPress={() => navigation.navigate('CadastroRO')}>
            <Image source={require('../../imgs/ocorrencia.png')} />
            <Text style={styles.mid1Text}>Abrir Registro de Ocorrência</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mid1} onPress={() => navigation.navigate('AcompanharRO')}>
          <Image source={require('../../imgs/fale_conosco.png')} />
          <Text style={styles.mid1Text}>Fale Conosco</Text>
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    paddingTop: '10%',
  },

  mid1: {
    width: '42.5%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    elevation: 8,
  },

  mid1Text: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1D2045',
    textAlign: 'center',
    fontFamily: 'Inter',
  },

  mid2: {
    width: '42.5%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
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
});
