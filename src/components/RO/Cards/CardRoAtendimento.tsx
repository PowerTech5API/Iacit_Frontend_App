import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';



export default function CardRoAtendimento(props){
    const navigation = useNavigation();

    
    const {titulo} = props;
    const {descricao} = props;

    return(
            <TouchableOpacity style={styles.mid1} onPress={() => navigation.navigate('DetalhesRoAtendimento')}>
              <ScrollView>
                <Text style={{color: '#000000'}}>Titulo: {titulo}</Text>

                <Text style={{color: '#000000'}}>Descrição: {descricao}</Text>

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
      elevation: 8,
      paddingLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: '5%',
    },
  });