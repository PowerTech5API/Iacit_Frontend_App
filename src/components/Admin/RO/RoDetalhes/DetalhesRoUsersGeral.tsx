import React, { useState, useEffect } from 'react';
import {View, Image, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function DetalhesRoUsersGeral(){
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

    function renderStatus(){
        if(ro.status == "Pendente"){
          return (
            <>
              <Text style={styles.text2}>Status: <Text style={{color: '#EB5757', fontWeight:'bold'}}>{ro.status}</Text></Text>
            </>        
          )
        }
        if(ro.status == "Em atendimento"){
          return (
            <>
              <Text style={styles.text2}>Status: <Text style={{color: '#F2C94C', fontWeight:'bold'}}>{ro.status}</Text></Text>
            </>        
          )
        }
        if(ro.status == "Atendida"){
          return (
            <>
              <Text style={styles.text2}>Status: <Text style={{color: '#6FCF97', fontWeight:'bold'}}>{ro.status}</Text></Text>
            </>        
          )
        }
     }

   function renderElement(){
      if(ro.defeito == "hardware"){
        return (
          <>
            <Text style={styles.text1}>Equipamento: <Text style={styles.palavras}>{ro.hardware.equipamento}</Text></Text>
            <Text style={styles.text1}>Posição: <Text style={styles.palavras}>{ro.hardware.posicao}</Text></Text>
            <Text style={styles.text1}>Part Number: <Text style={styles.palavras}>{ro.hardware.partnumber}</Text></Text>
            <Text style={styles.text2}>Serial Number: <Text style={styles.palavras}>{ro.hardware.serialNumber}</Text></Text>
          </>        
        )
      }
      if(ro.defeito == "software"){
        return (
          <>
            <Text style={styles.text1}>Versão da Base de Dados: <Text style={styles.palavras}>{ro.software.versaoBD}</Text></Text>
            <Text style={styles.text1}>Versão do Software: <Text style={styles.palavras}>{ro.software.versaoSoftware}</Text></Text>
            <Text style={styles.text2}>Logs anexadas: <Text style={styles.palavras}>{ro.software.LogsRO}</Text></Text>         
          </>        
        )
      }
   }

   function renderBotao(){
    if(ro.status == "Pendente"){
      return (
        <>
          <TouchableOpacity style={styles.analisar}>                
            <Text style={styles.analisarText}>Atender</Text>
          </TouchableOpacity>
        </>        
      )
    }
    if(ro.status == "Em atendimento"){
      return (
        <>
          <TouchableOpacity style={styles.analisar}>                
            <Text style={styles.analisarText}>Analisar RO</Text>
          </TouchableOpacity>
        </>        
      )
    }
 }
    
    return(
        <>
       
        <View style={styles.container2}>
          <ScrollView>
            
            <View style={styles.mid1}>

                { renderStatus() } 

                <Text style={styles.text}>Titulo: <Text style={styles.palavras}>{ro.titulo}</Text></Text>

                <Text style={styles.text2}>Descrição: <Text style={styles.palavras}>{ro.descricao}</Text></Text>         

                <Text style={styles.text2}>Defeito: <Text style={styles.palavras}>{ro.defeito}</Text></Text> 

                { renderElement() } 
                
            </View>

            { renderBotao() } 

          </ScrollView>
        </View>

        </>

        )
}

const styles = StyleSheet.create({

    container2: {
      flex: 1.0,
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
      marginBottom: 20,
      fontWeight: 'bold',
      fontSize: 16, 
      color: 'black',

  },
  text1:{
      marginBottom: 10,
      fontWeight: 'bold',
      fontSize: 15,
      color: 'black',
  },

  palavras:{
    fontWeight: 'normal',
    color: 'black',
  },

  text2:{
      fontWeight: 'bold',
      marginBottom: 20,
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
    marginTop: 30,
    width: '35%',
    height: 50,
    marginLeft: '60%',
    backgroundColor: '#1E457E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },

  analisarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  });