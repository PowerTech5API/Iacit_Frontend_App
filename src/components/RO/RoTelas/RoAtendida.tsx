import React, { useState, useEffect } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CardRoAtendida from '../Cards/CardRoAtendida';
import api from '../../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';


export default function RoAtendida(){
  const navigation = useNavigation();

  const [ro, setRo] = useState([]);

  useEffect(() => {
    async function Teste(){
      const userToken = await AsyncStorage.getItem("userToken")
      await api.get('ro/userStatus/Atendida', {headers: {Authorization: `Bearer ${userToken}`}}).then(({data}) =>{
        setRo(data);
      })
    }
    Teste();
  }, [])

    return(
        <>
        <View style={styles.container2}>
          <ScrollView>
            {ro.map((item, index) => (
              <CardRoAtendida key={index} id={item._id} titulo={item.titulo} descricao={item.descricao} status={item.status}/>
            ))}
          </ScrollView>
        </View>
        </>
        )
}

const styles = StyleSheet.create({
    container2: {
      flex: 1,
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
    }
  });