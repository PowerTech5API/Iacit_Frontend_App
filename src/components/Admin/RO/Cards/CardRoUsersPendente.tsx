import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";



export default function CardRoUsersPendente(props){
    const navigation = useNavigation();

    
    const {titulo} = props;
    const {usuario} = props;
    const {id} = props;
    const {status} = props;

    async function enviarIdRo(){
      await AsyncStorage.setItem("roId", id);
      const roId = await AsyncStorage.getItem("roId");
      console.log(roId);
      navigation.navigate('DetalhesRoUsersPendente')
    }


    return(            
            <TouchableOpacity style={styles.mid1} onPress={enviarIdRo}>
                <Text style={{color: '#000000'}}>Titulo: {titulo}</Text>

                <Text style={{color: '#000000'}}>Usuário: {usuario}</Text>

                <Text style={{color: '#EB5757'}}>{status}</Text>
            </TouchableOpacity>
    )
        
}


const styles = StyleSheet.create({    
  
    mid1: {
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 4,
      shadowColor: '#000',
      elevation: 5,
      paddingLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: '5%',
      borderWidth: 2,
      borderColor: 'black',
    },
  });