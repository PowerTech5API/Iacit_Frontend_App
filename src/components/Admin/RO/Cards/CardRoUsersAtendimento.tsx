import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function CardRoUsersAtendimento(props){
    
    const {titulo} = props;
    const {usuario} = props;

    return(
            <TouchableOpacity style={styles.mid1}>
              <ScrollView>
                <Text style={{color: '#000000'}}>Titulo: {titulo}</Text>

                <Text style={{color: '#000000'}}>Usuário: {usuario}</Text>

                <Text style={{color: '#F2C94C'}}>Atendimento</Text>
              </ScrollView>
            </TouchableOpacity>
    )
        
} 


const styles = StyleSheet.create({    
  
    mid1: {
      width: '90%',
      height: 70,
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