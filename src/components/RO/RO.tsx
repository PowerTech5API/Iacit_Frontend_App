import { Component, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class RO extends Component{
    render(){ 
      // VER COMO PERSONALIZAR COR STATUS 
        let x = this.props.x
        return(
                <View style={styles.mid1}>
                    <Text style={{color: '#000000'}}>
                        {this.props.projeto}
                    </Text>

                    <Text style={{color: '#000000'}}>
                        {this.props.descricao}
                    </Text>

                    <Text style={{color: '#6FCF97'}}>
                        {this.props.status}
                    </Text>
                </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',      
    },
  
    mid1: {
      width: '90%',
      height: 70,
      backgroundColor: 'white',
      borderRadius: 4,
      shadowColor: '#000',
      elevation: 8,
      paddingLeft: 10,
      marginTop: 20,
    },
  
    ROAtendida:{
      color: '#6FCF97',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
  
    }
  });