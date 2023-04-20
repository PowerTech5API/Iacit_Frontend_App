import { Component, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class RO extends Component{
    render(){ 
      // VER COMO PERSONALIZAR COR STATUS 
        let x = this.props.x
        return(
            <View style={styles.container1}>
                
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

            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      
    },
  
  
    mid1: {
      width: '90%',
      height: 70,
      backgroundColor: 'white',
      borderRadius: 4,
      justifyContent: 'center',
      shadowColor: '#000',
      elevation: 8,
    },
  
    ROAtendida:{
      color: '#6FCF97',
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
  
    }
  });