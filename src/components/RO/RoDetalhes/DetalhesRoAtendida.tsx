import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';


export default function DetalhesROAtendida(props){
  const navigation = useNavigation();

  const {titulo} = props;
  const {descricao} = props;

    return(
        <>
        <View style={styles.container2}>
          <View style={styles.mid1}>
            <ScrollView>
              <Text style={styles.text}>Titulo: {titulo}</Text>

              <Text style={styles.text1}>Descrição: {descricao}</Text>

              <Text style={styles.text2}>Status: <Text style={{color: '#6FCF97', fontWeight:'bold'}}>Atendida</Text> </Text>
            </ScrollView>
          </View>
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