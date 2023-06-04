import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CardRoGeral from '../Admin/RO/Cards/CardRoGeral';
import FiltroIcon from './FiltroIcon';

export default function UserMenu() {
  const navigation = useNavigation();
  const tipo = ["Hardware", "Software"];
  const dataRo = ["Recente", "Antigo"];
  const users = [];
  const status = ["Pendente", "Em Atendimento", "Atendinda"];

  return (
    <>
    <View>
      <View style={styles.campoTexto}>
        <Text style={styles.texto}>Olá, estes são os seus registros de ocorrências, para mais informações clique no registro. </Text>
      </View>

      <View>
        <Text style={styles.filtroTexto}>
          Filtrar por:
        </Text>           
            </View>
            <View>
                <FiltroIcon />
            </View>
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
  texto:{
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
    marginTop: 5,
  },
  campoTexto:{
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
  filtroTexto:{
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 5,
    marginLeft: 8,
  },
});