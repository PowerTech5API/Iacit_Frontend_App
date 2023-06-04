import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CardRoGeral(props){
    const navigation = useNavigation();

    
    const {titulo} = props;
    const {tipo} = props;
    const {usuario} = props;
    const {status} = props;
    const {id} = props;

    async function enviarIdRo(){
      await AsyncStorage.setItem("roId", id);
      const roId = await AsyncStorage.getItem("roId");
      console.log(roId);
      navigation.navigate('DetalhesRoUsersGeral')
    }

    function renderElement(){
      if(status == "Pendente"){
        return (
          <>
            <Text style={{color: '#EB5757'}}>{status}</Text>
          </>        
        )
      }
      if(status == "Em atendimento"){
        return (
          <>
            <Text style={{color: '#F2C94C'}}>{status}</Text>
          </>        
        )
      }
      if(status == "Atendida"){
        return (
          <>
            <Text style={{color: '#6FCF97'}}>{status}</Text>
          </>        
        )
      }
   }


    return(            
            <TouchableOpacity style={styles.mid1} onPress={enviarIdRo}>
                <Text style={{color: '#000000'}}>Titulo: {titulo}</Text>

                <Text style={{color: '#000000'}}>Tipo: {tipo}</Text>

                <Text style={{color: '#000000'}}>Usuário: {usuario}</Text>

                { renderElement() }
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