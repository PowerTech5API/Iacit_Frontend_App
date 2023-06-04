import React, { useContext } from 'react';
import { Alert } from 'react-native';
import {  StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../service/api';
import { useAuth } from '../User/AuthProvider';
import { ConfigContext } from '../../contexts/configContext';

export default function Permissoes({ navigation, handleConfigChange }) {
  const { id } = useAuth();
  const configContext = useContext(ConfigContext);
  const { aceitarTermos, receberEmail, handleReceberEmail } = configContext;


  const enviarConfiguracoes = () => {
    const data = {
      userId: id,
      termsAccepted: aceitarTermos,
      receiveEmails: receberEmail,
    };

    console.log('CONFIGURAÇÕES PERMISSÕES :', data);

    api.post('/config/saveConfig', data)
      .then(response => {
        handleConfigChange(data);
        console.log(response.data); 
      })
      .catch(error => {
        console.log(error);
      });
      Alert.alert('Sucesso', 'Configurações salvas com sucesso!');
  };

    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.containerTitulo}>Permissões e Notificações</Text>
      </View>
      <Text style={styles.containerSubtitulo}>Gerencie o recebimento de notificações</Text>


      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="email" size={35} style={styles.icon} />
          <View style={styles.titleContainer}>
            <Text style={styles.titulo}>Receber e-mail</Text>
            <Text style={styles.subtitulo}>
              Quero receber informações sobre o andamento dos meus Registros de Ocorrência no meu e-mail cadastrado.
            </Text>
          </View>
          <Switch value={receberEmail} onValueChange={handleReceberEmail} />
        </View>

      </View>
      {/*Aceitar notificação push */}
      {/* 
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="bell-badge" size={35} style={styles.icon} />
          <View style={styles.titleContainer}>
            <Text style={styles.titulo}>Receber por notificação</Text>
            <Text style={styles.subtitulo}>
              Quero receber informações sobre o andamento dos meus Registros de Ocorrência por notificação no meu aparelho.
            </Text>
          </View>
          <Switch value={aceitarNotificacao} onValueChange={handleAceitarNotificacao} />
        </View>
      </View>
      */}

      <TouchableOpacity
        style={styles.button}
        onPress={enviarConfiguracoes}
      >
        <Text style={styles.buttonText}>Salvar Configuração</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingTop: '10%',
    alignItems: 'center',
  },
  containerTitulo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  containerSubtitulo: {
    paddingTop: 40,
    marginLeft: 5,
    marginRight:5,
    marginBottom:30,
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    elevation: 8,
    marginBottom: '5%',
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D2045',
  },
  subtitulo: {
    fontSize: 16,
    color: '#1D2045',
  },
  icon: {
    color: '#1D2045',
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
  disabledButton: {
    backgroundColor: '#888888',
  },
})