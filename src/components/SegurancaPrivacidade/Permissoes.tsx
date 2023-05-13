import React from 'react';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Permissoes({navigation}) {
    const [receberEmail, setReceberEmail] = useState(false);
    const [receberNotificacao, setReceberNotificacao] = useState(false);
  
    const handleReceberEmail = () => {
      setReceberEmail(!receberEmail);
    };
  
    const handleReceberNotificacao = () => {
      setReceberNotificacao(!receberNotificacao);
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

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="bell-badge" size={35} style={styles.icon} />
          <View style={styles.titleContainer}>
            <Text style={styles.titulo}>Receber por notificação</Text>
            <Text style={styles.subtitulo}>
              Quero receber informações sobre o andamento dos meus Registros de Ocorrência por notificação no meu aparelho.
            </Text>
          </View>
          <Switch value={receberNotificacao} onValueChange={handleReceberNotificacao} />
        </View>
      </View>
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
})