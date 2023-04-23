import React, { useState, useEffect } from 'react';
import {View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, Modal, Alert} from 'react-native';
import api from '../../service/api';
import CardRoAtendimentoDetalhes from './CardRoAtendimentoDetalhes';


export default function DetalhesRoAtendimento({navigation}){
  const [modalVisible, setModalVisible] = useState(false);
    return(
        <>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.img1}>
            <Image source={require('../../imgs/config.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.img2}>
            <Image source={require('../../imgs/notificacao.png')} />
            
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <CardRoAtendimentoDetalhes />
          <View style={styles.div}>
            <Text style={styles.texto}>Sua ocorrência foi resolvida?{'\n'}Se sim, por favor finalize a Ocorrência.</Text>
          </View>

          <Modal animationType="none"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
            <View style={styles.popUp}>
              <View>
                <Text style={styles.popTexto}>Deseja finalizar a Ocorrência?{'\n'}
                Se finalizar a ocorrência e o problema{'\n'}
                não tiver sido solucionado, deverá{'\n'}
                abrir um novo Registro de Ocorrência.</Text>
              </View>
                <TouchableOpacity style={styles.popBotao} onPress={() => setModalVisible(true)}>
                  <Text style={styles.textoBotao}>Sim, desejo finalizar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.popCancelar} onPress={() => setModalVisible(true)}>
                  <Text style={styles.textoBotao}>Cancelar</Text>
                </TouchableOpacity>
              <View>
                
              </View>
            </View>
          </Modal>

          <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(true)}>
            <Text style={styles.textoBotao}>Finalizar RO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container3}>
          <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('UserMenu')}>
            <Image source={require('../../imgs/inicio.png')} />
            <Text style={styles.buttonsText}>Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <Image source={require('../../imgs/chat.png')} />
            <Text style={styles.buttonsText}>Chat</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('AcompanharRO')}>
            <Image source={require('../../imgs/registros.png')} />
            <Text style={styles.buttonsText}>Registros</Text>
          </TouchableOpacity>
        </View>
        </>

        )
}

const styles = StyleSheet.create({
    container1: {
      flex: 0.1,
      flexDirection: 'row',
      backgroundColor: '#1D2045',
      alignItems: 'center',
      justifyContent: 'center',
    },

    popUp:{
      width: '80%',
      height: '60%',
      marginTop: '30%',
      marginLeft: '10%',
      borderColor: 'black',
      borderWidth: 1,
    },
    popTexto:{
      color: 'black',
      fontSize: 18,
      marginLeft: 8,
    },
    popCancelar:{
      backgroundColor: '#1E457E',
      width: '30%',
      height: 40,
      marginLeft: '5%',
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },

    popBotao:{
      backgroundColor: '#1E457E',
      width: '63%',
      height: 40,
      marginLeft: '5%',
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },

    div:{
      left: '5%',
      marginTop: 35,
      paddingLeft: 5,
      
    },
    botao:{
      backgroundColor: '#1E457E',
      width: '28%',
      height: 40,
      marginLeft: '5%',
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,

    },

    textoBotao:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    texto:{
      fontSize: 15,
      color: 'black',
    },
  
    img1: {
      right: 100,
    },
    img2: {
      left: 100,
    },
  
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
    }
  
  });