import { StyleSheet, Text, View } from "react-native";

export default function CardRoAtendimento(props){
    
    const {titulo} = props;
    const {descricao} = props;

    return(
            <View style={styles.mid1}>
                <Text style={{color: '#000000'}}>Titulo: {titulo}</Text>

                <Text style={{color: '#000000'}}>Descrição: {descricao}</Text>

                <Text style={{color: '#F2C94C'}}>Atendimento</Text>
            </View>
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