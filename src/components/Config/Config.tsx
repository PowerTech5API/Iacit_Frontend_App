import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../User/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Config() {
  const { name, email } = useAuth();
  console.log(name);
  console.log(email);

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
            <Text style={styles.titulo}>Alterar Senha</Text>
            <Text style={styles.password}>********</Text>
          <View style={styles.iconContainer}>
            <Icon name="chevron-right" size={35} style={styles.iconRight} />
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
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
});

export default Config;