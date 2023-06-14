import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../User/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function Config() {
  const navigation = useNavigation();
  const { name, email, clearEmail,clearName } = useAuth();
  const [confirmarSenha, setConfirmarSenha] = useState(false);
  const [senhaEnviada, setSenhaEnviada] = useState(false);

  const confirmarAlteracaoSenha = async () => {
    try {
      await api.get(`user/recuperarsenha/${email}`);
      alert('Sena nova enviada para o e-mail!');
      setSenhaEnviada(true);
          // Função de logout
    async function Logout() {
      await AsyncStorage.removeItem('userToken');
      clearName();
      clearEmail();
      const userToken = await AsyncStorage.getItem("userToken")
      console.log('Logout realizado, token:', userToken);
      navigation.navigate('Login');
    }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.containerTitulo}>Configurações da Conta</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.titleContainer}>
            <View style={styles.cardHeader}>
              <Icon name="card-account-details" size={25} style={styles.icon} />
              <Text style={styles.titulo2}>Dados Pessoais</Text>
            </View>
            <Text style={styles.titulo}>Nome</Text>
            <Text style={styles.subtitulo}>{name}</Text>
            <View style={styles.divider} />
            <Text style={styles.titulo}>E-mail</Text>
            <Text style={styles.subtitulo}>{email}</Text>
          </View>
        </View>
      </View>

      <View style={styles.passwordCard}>
        <View style={styles.titleContainer}>
          <View style={styles.cardHeader}>
            <Icon name="cog" size={25} style={styles.icon} />
            <Text style={styles.titulo2}>Configurações</Text>
          </View>

          <TouchableOpacity onPress={() => setConfirmarSenha(true)}>
            <Text style={styles.titulo}>Alterar Senha</Text>
            <Text style={styles.password}>********</Text>

            <View style={styles.iconContainer}>
              <Icon name="chevron-right" size={35} style={styles.iconRight} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.opcao}>
            <Text style={styles.titulo}>Excluir Conta</Text>
            <View style={styles.iconContainer}>
              <Icon name="chevron-right" size={35} style={styles.iconRight} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={confirmarSenha} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Alterar Senha</Text>
          <Text style={styles.modalMessage}>Deseja alterar sua senha?</Text>

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmarAlteracaoSenha}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setConfirmarSenha(false)}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {senhaEnviada && (
      <Text style={styles.mensagemSenha}>Senha nova enviada para o e-mail!</Text>
    )}
    </View>
  );
}


const styles = StyleSheet.create({
  mensagemSenha: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1F44',
    marginTop: 10,
    textAlign: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#1D2045' + '5D',
    marginBottom: 10,
    marginTop:10,
    width: '100%',
    alignSelf: 'center',
  },
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
    marginRight: 5,
    marginBottom: 30,
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    elevation: 8,
    marginTop: 40,
    marginBottom: '5%',
    padding: 20,
  },
  passwordCard: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    flexDirection: 'row',
    elevation: 8,
    marginTop: '2%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginLeft: 10,
    width: '90%',
  },
  passwordContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  password: {
    fontSize: 16,
    color: '#1D2045',
    marginTop: 5,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D2045',
    marginBottom:5,
  },
  titulo2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D2045',
    marginLeft: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#1D2045',
  },
  icon: {
    color: '#1D2045',
  },
  iconContainer: {
    justifyContent: 'center',
    marginLeft: 'auto',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -13.5 }], // Metade do tam do ícone para centralizar verticalmente

  },
  iconRight: {
    color: '#1D2045',
    marginLeft: 'auto',
    marginRight: 0,
  },
  title: {
    fontSize: 25,
    color: '#1C1F44',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
  },
  opcao:{
    marginTop: 20,
  },
  modalContainer: {
    flex: 0.5,
    backgroundColor: '#F2F2F2',
    paddingTop: '10%',
    alignItems: 'center',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1C1F44',
    marginBottom: 20,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 30,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#1C1F44',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#EAEAEB',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Config;
