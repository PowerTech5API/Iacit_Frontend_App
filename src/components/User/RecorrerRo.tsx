import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AuthProvider from "./AuthProvider";
import axios from "axios";
import api from "../../service/api";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function RecorrerRo(){
    const [motivo, setMotivo] = useState("");
    const [ro, setRo] = useState([]);

    useEffect(() => {
        async function Teste(){
          const roId = await AsyncStorage.getItem("roId")
          await api.get(`ro/getById/${roId}`).then((response) =>{
            setRo(response.data);
            console.log(response.data)
          })
        }
        Teste();
      }, [])
    
      const enviar = {
        "_id": ro._id,
        "status": motivo
      }
      
    async function enviarMotivo() {
     console.log(enviar)
    //  await api.put('ro/update', enviar).then((response) =>{
    //     console.log(response.data);
    //     alert('');
    //   }).catch(function (error) {
    //       console.log(error);
    //       alert('Algo deu errado!');
    //     })
    }


    return(
        <View>
            <View>
                <Text style={styles.texto}>
                    Por favor, informe o motivo pelo qual você recorreu a solução da Ocorrência:
                </Text>
                <View style={styles.CampoInput}>
                <TextInput style={styles.input}
                    multiline={true}
                    value={motivo}
                    onChangeText={setMotivo}
                 >   
                </TextInput>
                </View>

                <View style={styles.view}>
                    <TouchableOpacity style={styles.Cancelar}>
                    <Text style={styles.TextoCancelar}>Cancelar</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.Enviar} onPress={enviarMotivo}>
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
        color: 'black',
    },
    CampoInput:{
        backgroundColor: 'white',
        marginStart:20,
        marginEnd:20,
        borderRadius: 5,
        maxWidth: 380,
        height: 150,
        marginTop:10,
        padding: 5,
        elevation: 5,
        borderColor: 'black',
        borderWidth: 1,
    }
})
