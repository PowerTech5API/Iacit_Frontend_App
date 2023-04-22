import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function CardRoAtendida(props){
    
    const {titulo} = props;
    const {descricao} = props;

    return(
            <View style={styles.mid1}>
              <ScrollView>
                <Text style={styles.text}>Titulo: {titulo}</Text>

                <Text style={styles.text1}>Descrição: {descricao}</Text>

                <Text style={styles.text2}>Status: <Text style={{color: '#6FCF97', fontWeight:'bold'}}>Atendida</Text> </Text>
              </ScrollView>
            </View>
    )
        
}
const styles = StyleSheet.create({    
  
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