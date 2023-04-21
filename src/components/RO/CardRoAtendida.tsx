import { StyleSheet, Text, View } from "react-native";

export default function CardRoAtendida(props){
    
    const {titulo} = props;
    const {descricao} = props;

    return(
            <View style={styles.mid1}>
                <Text style={{color: '#000000'}}>{titulo}</Text>

                <Text style={{color: '#000000'}}>{descricao}</Text>

                <Text style={{color: '#6FCF97'}}>Atendida</Text>
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