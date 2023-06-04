import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function limparFiltro({ handleLimparFiltro }){

    


    return(
        <TouchableOpacity style={styles.limparFiltro} onPress={handleLimparFiltro}>
             <Text style={styles.limparFiltroText}>Limpar filtro</Text>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({ 
    limparFiltro: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1D2045',
        textAlign:'left',
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15,
    },
    limparFiltroText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1D2045',
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 15,
      },
});
