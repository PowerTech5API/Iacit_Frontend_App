import React, { useState } from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, Button, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api';

export default function SegurancaPrivacidade() {
  const navigation = useNavigation();

  const EmailScreen = () => {
    const [isSendEmail, setIsSendEmail] = useState(false);
  
    const handleSwitch = () => {
      setIsSendEmail(!isSendEmail);
    }
  
    const handleSubmit = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      const data = { isSendEmail };
      await api.post('/user/:isSendEmail', data, {headers: {Authorization: `Bearer ${userToken}`}});
    }
  

  return (
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
      <Text style={styles.text}>Você aceita receber e-mails com as notificações?</Text>
      <View style={styles.switchContainer}>
        <Switch value={isSendEmail} onValueChange={handleSwitch} />
      </View>
      <Button mode="contained" onPress={handleSubmit}>Enviar</Button>

      </View>

      <View style={styles.container3}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('UserMenu')}>
          <Image source={require('../../imgs/inicio.png')} />
          <Text style={styles.buttonsText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Image source={require('../../imgs/chat.png')} />
          <Text style={styles.buttonsText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('AcompanharRO')}>
          <Image source={require('../../imgs/registros.png')} />
          <Text style={styles.buttonsText}>Registros</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
     marginBottom: 20,
  },
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
