import React, { useState, useEffect } from 'react';
import {View, Image, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import api from '../../../../service/api';
import {useNavigation} from '@react-navigation/native';
import CardRoUsersAtendimento from '../Cards/CardRoUsersAtendimento';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function RoAtendimentoUsers(){
  const navigation = useNavigation();

  const tipo = ["Hardware", "Software"];

  const dataRo = ["Recente", "Antigo"];

  const users = [];

  const [ro, setRo] = useState([]);


  useEffect(() => {
    async function Teste(){
      await api.get('ro/status/Em atendimento').then(({data}) =>{
        setRo(data);
      })
    }
    Teste();
  }, [])
  
    return(
        <>
        <View style={styles.container2}>

        <View style={styles.topo}>
            <Text style={styles.topoTitulo}>Ocorrências em Atendimento</Text>
          </View>

          <View style={styles.filtro}>           
            <Text style={styles.filtroTitulo}>Filtrar por:</Text>            
            <View style={styles.filtros}>

              <SelectDropdown              
                buttonStyle={styles.filtroBotao}
                buttonTextStyle={styles.filtroTexto}
                defaultButtonText='Tipo'
                renderDropdownIcon={isOpened => {
                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition='right'
                data={tipo}                
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />

              <SelectDropdown              
                buttonStyle={styles.filtroBotao}
                buttonTextStyle={styles.filtroTexto}
                search
                defaultButtonText='Usuários'
                renderDropdownIcon={isOpened => {
                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition='right'
                data={users}                
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />

              <SelectDropdown              
                buttonStyle={styles.filtroBotao}
                buttonTextStyle={styles.filtroTexto}
                defaultButtonText='Data'
                renderDropdownIcon={isOpened => {
                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition='right'
                data={dataRo}                
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />
            
            </View>
          </View>

          <ScrollView>
            {ro.map((item, index) => (
              <CardRoUsersAtendimento key={index} id={item._id} titulo={item.titulo} usuario={item.nomeRelator} status={item.status}/>
            ))}            
          </ScrollView>

        </View>
        </>

        )
}

const styles = StyleSheet.create({
    container2: {
      flex: 0.8,
      backgroundColor: '#F2F2F2',
      paddingTop: 10,
    },

    topo: {
      alignItems: 'center',
      marginTop: 10,      
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
    },

    filtros: {
      flexDirection: 'row',
      height: 70,
      alignItems: 'center',
    },

    filtroBotao: {
      width: 100,
      marginLeft: 10,
      elevation: 5,
      borderWidth: 2,
      borderColor: 'black',
    },

    filtroTexto: {
      fontSize: 10,
      color: 'black',
      textAlign: 'center',
    },
  
    cards: {
      width: '90%',
      height: 70,
      backgroundColor: 'white',
      borderRadius: 4,
      justifyContent: 'center',
      shadowColor: '#000',
      elevation: 8,
      marginTop: '10%',
    },
  
    mid1Text: {
      marginTop: 5,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#6FCF97',
      textAlign: 'center',
      fontFamily: 'Inter',
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
  
    ROPendente: {
      color: '#EB5757',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
  
    },
    ROAtendimento: {
      color: '#F2C94C',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
  
    },
    ROAtendida:{
      color: '#6FCF97',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
  
    },
    titulo: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000'
    }
  
  });