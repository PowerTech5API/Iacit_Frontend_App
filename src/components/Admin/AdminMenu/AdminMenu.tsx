import React, { useState, useEffect } from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CardRoGeral from '../RO/Cards/CardRoGeral';
import api from '../../../service/api';
import Filtro from './Filtros';


export default function AdminMenu() {
 
  return (
    <View style={styles.filtroTitulo}>
      <Text>Filtrar por:</Text>   
      <Filtro />
    </View>
    
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
    backgroundColor: '#F2F2F2',
  },

  topo: {
    alignItems: 'center',
    marginTop: 20,
  },

  topoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  filtro: {    
    marginTop: 20,
    paddingLeft: 20,      
  },

  filtroTitulo: {    
    color: 'black',
    fontSize: 12, 
    fontWeight: 'bold',
  },
});

