import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function limparFiltro(){
    return(
        <View>
            <Text style={styles.limparFiltro}>Limpar filtro</Text>
        </View>
    );
}
const styles = StyleSheet.create({ 
    limparFiltro: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1D2045',
        textAlign:'left',
        marginLeft: 10,
        marginTop: 10,
    },
});
