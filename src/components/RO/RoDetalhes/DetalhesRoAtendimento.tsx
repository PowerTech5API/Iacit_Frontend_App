import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, Modal, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetalhesRoAtendimento(props){
  const [modalVisible, setModalVisible] = useState(false);

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

  const enviar = {
    "_id": ro._id,
    "status": "Atendida"
  }

  async function alterar(){
    await api.put('ro/update', enviar).then((response) =>{
      console.log(response.data);
      alert('Ocorrência finalizada com sucesso!');
      navigation.navigate('AcompanharRO');
    }).catch(function (error) {
        console.log(error);
        alert('Algo deu errado!');
        setModalVisible(false);
      })
  }    


    return(
        <>
        <View style={styles.container2}>
          <ScrollView>
          <View style={styles.mid1}>

              <Text style={styles.text}>Titulo: {ro.titulo}</Text>

              <Text style={styles.text1}>Descrição: {ro.descricao}</Text>

              <Text style={styles.text2}>Status: <Text style={{color: '#F2C94C', fontWeight:'bold'}}>Atendimento</Text> </Text>

          </View>
        
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
                <TouchableOpacity style={styles.popBotao} onPress={alterar}>
                  <Text style={styles.textoBotao}>Sim, desejo finalizar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.popCancelar} onPress={() => setModalVisible(false)}>
                  <Text style={styles.textoBotao}>Cancelar</Text>
                </TouchableOpacity>
              <View>
                
              </View>
            </View>
          </Modal>

          <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(true)}>
            <Text style={styles.textoBotao}>Finalizar RO</Text>
          </TouchableOpacity>

          </ScrollView>
        </View>
        </>

        )
}

const styles = StyleSheet.create({

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
      width: '75%',
      height: 40,
      marginLeft: '12.5%',
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },

    popBotao:{
      backgroundColor: '#1E457E',
      width: '75%',
      height: 50,
      marginLeft: '12.5%',
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
      width: 130,
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
});