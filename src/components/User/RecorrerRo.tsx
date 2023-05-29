import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AuthProvider from "./AuthProvider";

export default function RecorrerRo(){
    return(
        <View>
            <View>
                <Text style={styles.texto}>
                    Por favor, informe o motivo pelo qual você recorreu a solução da Ocorrência:
                </Text>
                <View style={styles.CampoInput}>
                <TextInput style={styles.input}
                    multiline
                    numberOfLines={5}
                    maxLength={180}>
                    
                </TextInput>
                </View>

                <View style={styles.view}>
                    <TouchableOpacity style={styles.Cancelar}>
                    <Text style={styles.TextoCancelar}>Cancelar</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.Enviar}>
                    <Text style={styles.TextoBotao}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Cancelar:{
        backgroundColor: 'white',
        width: 130,
        height: 40,
        marginLeft: '5%',
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#000',
    },
    TextoCancelar:{
        color: '#1E457E',
        fontWeight:'bold',
        fontSize: 18,
    },

    Enviar:{
        backgroundColor: '#1E457E',
        width: 130,
        height: 40,
        marginLeft: '5%',
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#000',
    },

    TextoBotao:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    view:{
        flexDirection:'row',

    },
    texto:{
        fontSize: 18,
        fontWeight:'bold',
        marginStart: 20,
    },
    input:{
        fontSize: 18,
        color: 'pink',
    },
    CampoInput:{
        backgroundColor: 'white',
        marginStart:20,
        marginEnd:20,
        borderRadius: 5,
        maxWidth: 380,
        height: 150,
        marginTop:10,
    }
})