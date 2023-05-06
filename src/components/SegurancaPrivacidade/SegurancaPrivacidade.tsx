import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import api from '../../service/api';


async function setSendEmail(data) {
    await api.put('user',(data)).then((response) =>  {
      console.log(response.data);
    }).catch(function (error) {
      console.error('Erro, tente novamente mais');
    });
  }

  const SegurancaPrivacidade = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleAccept = async () => {
      await setSendEmail({ isSendEmail: true });
      setIsChecked(true);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Termos de Privacidade</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>
            Seu e-mail será usado para receber notificações do aplicativo.
          </Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              style={styles.checkbox}
            />
            <Text>Eu li e concordo com os termos.</Text>
          </View>
          <TouchableOpacity
            style={[styles.button, { opacity: isChecked ? 1 : 0.5 }]}
            disabled={!isChecked}
            onPress={handleAccept}
          >
            <Text style={styles.buttonText}>Aceitar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingVertical: 50,
      paddingHorizontal: 20,
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: 15,
    },
    contentContainer: {
      flex: 0.8,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    checkbox: {
      marginRight: 10,
    },
    title: {
      fontSize: 25,
      color: '#1C1F44',
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
      marginBottom: 20,
      padding:10,
    },
    button: {
      backgroundColor: '#1E457E',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
export default SegurancaPrivacidade;
