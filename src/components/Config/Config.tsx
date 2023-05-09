import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import api from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Config () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function getUserData() {
        const userToken = await AsyncStorage.getItem("userToken")
        console.log(userToken)
      
        // fazer uma requisição para buscar o usuário pelo ID
        const response = await api.get(`/user/getById/${userId}`);
        const userData = response.data;
        console.log(userData)
      
        // atualizar o estado com os dados do usuário
        setName(userData.name);
        setEmail(userData.email);
      }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Configurações da Conta</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>
            Nome: {name}
          </Text>
          <Text style={styles.text}>
            E-mail: {email}
          </Text>
        </View>
      </View>
    );
  }




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
  });
export default Config;
