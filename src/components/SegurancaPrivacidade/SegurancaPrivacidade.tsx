import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SegurancaPrivacidade({ navigation }) {
  return (
    <View style={styles.container2}>
      <View>
        <Text style={styles.titulo}>Segurança e Privacidade</Text>
      </View>
      <Text style={styles.containerSubtitulo}>
        Confira nossa política de privacidade e gerencie suas permissões e notificações
      </Text>

      <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate('TermosPrivacidade')}>
        <Icon name="file-certificate" size={35} style={styles.icon} />
        <Text style={[styles.text, { flex: 1 }]}>Termos de Privacidade</Text>
        <Icon name="chevron-right" size={35} style={styles.iconRight} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate('Permissões')}>
        <Icon name="bell-check" size={35} style={styles.icon} />
        <Text style={[styles.text, { flex: 1 }]}>Permissões e Notificações</Text>
        <Icon name="chevron-right" size={35} style={styles.iconRight} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingTop: '10%',
    alignItems: 'center',
  },
  containerSubtitulo: {
    paddingTop: 40,
    marginLeft: 5,
    marginRight:5
  },
  cards: {
    width: '90%',
    height: 70,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    flexDirection: 'row',
    elevation: 8,
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui o espaço entre os elementos
  },
  icon: {
    color: '#1D2045',
    marginLeft: 5,
    marginRight: 5,
  },
  iconRight: {
    color: '#1D2045',
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    flex: 1, // Ocupa o espaço disponível
    marginBottom: 5,
    marginTop: 2,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D2045',
    textAlign: 'left',
    fontFamily: 'Inter',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
});