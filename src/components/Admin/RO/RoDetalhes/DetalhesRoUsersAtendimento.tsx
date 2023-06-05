import React, { useState, useEffect } from 'react';
import {View, Image, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function DetalhesRoUsersAtendimento(){
    const navigation = useNavigation();

    const [ro, setRo] = useState([]);

    useEffect(() => {
      async function Teste(){
        const roId = await AsyncStorage.getItem("roId")
        await api.get(`ro/getById/${roId}`).then((response) =>{
          setRo(response.data);
        })
      }
      Teste();
    }, [])

   function renderElement(){
      if(ro.defeito == "hardware"){
        return (
          <>
            <Text style={styles.text1}>Equipamento: {ro.hardware.equipamento}</Text>
            <Text style={styles.text1}>Posição: {ro.hardware.posicao}</Text>
            <Text style={styles.text1}>Part Number: {ro.hardware.partnumber}</Text>
            <Text style={styles.text1}>Serial Number: {ro.hardware.serialNumber}</Text>
          </>        
        )
      }
      if(ro.defeito == "software"){
        return (
          <>
            <Text style={styles.text1}>Versão da Base de Dados: {ro.software.versaoBD}</Text>
            <Text style={styles.text1}>Versão do Software: {ro.software.versaoSoftware}</Text>
            <Text style={styles.text1}>Logs anexadas: {ro.software.LogsRO}</Text>         
          </>        
        )
      }
   }
    
    return(
        <>

        <View style={styles.container2}>
          <ScrollView>
            
            <View style={styles.mid1}>
              
                <Text style={styles.text2}>Status: <Text style={{color: '#F2C94C', fontWeight:'bold'}}>{ro.status}</Text> </Text>

                <Text style={styles.text}>Titulo: {ro.titulo}</Text>

                <Text style={styles.text1}>Descrição: {ro.descricao}</Text>         

                <Text style={styles.text1}>Defeito: {ro.defeito}</Text> 

                { renderElement() } 
                
            </View>

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
    },

    text:{
      marginBottom: 10,
      fontWeight: 'bold',
      fontSize: 20, 
      color: 'black',

  },
  text1:{
      marginBottom: 10,
      fontWeight: 'bold',
      fontSize: 15,
      color: 'black',
  },

  text2:{
      fontWeight: 'bold',
      marginBottom: 15,
      color: 'black',
  },


  mid1: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    elevation: 8,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '5%',
    fontWeight: 'bold',    
  },

  analisar: {
    marginTop: 40,
    width: '40%',
    height: 41,
    marginLeft: '30%',
    backgroundColor: '#1E457E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  analisarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  });