import Checkbox from 'expo-checkbox';
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import api from '../../../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetalheAnalise(){

    const [ro, setRo] = useState([]);

    useEffect(() => {
      async function Teste(){
        const roId = await AsyncStorage.getItem("roId")
        await api.get(`ro/getById/${roId}`).then((response) =>{
          setRo(response.data);
        })
      }
      Teste();
    }, [])

    const [critico, setCritico] = useState(false);
    const [alto, setAlto] = useState(false);
    const [baixo, setBaixo] = useState(false);
    const [funExiste, setFunExiste] = useState(false);
    const [funNaoExiste, setFunNaoExiste] = useState(false);
    const [investigacao, setInvestigacao] = useState(false);
    const [causaEx, setCausaEx] = useState(false);
    const [justificativa, setJustificativa] = useState("");

    function enviarAnalise(){
        console.log(critico);
        console.log(justificativa);
    }


    return (
        <View style={styles.container2} >
        <ScrollView> 

            <Text style={styles.titulo}>Detalhes do Registro</Text>  

            <View style={styles.mid}>
                <Text style={styles.midText}>Titulo: <Text style={styles.palavras}>{ro.titulo}</Text></Text>

                <Text style={styles.midText}>Descrição: <Text style={styles.palavras}>{ro.descricao}</Text></Text>         

                <Text style={styles.midText}>Defeito: <Text style={styles.palavras}>{ro.defeito}</Text></Text>     
            </View>     

            <Text style={styles.titulo}>Análise dos registros</Text>  

            <View style={styles.mid}>
                <Text style={styles.topic}>Data e hora de recebimento:</Text>
                <Text style={styles.centro}>Classificação</Text>
                <Text style={styles.topic}>Defeito:</Text>

                <View style={styles.checkboxAlign}>
                    <Checkbox
                        style={styles.checkbox}
                        value={critico}
                        onValueChange={setCritico}
                        />
                    <Text style={styles.checkboxText}>Crítico - Categoria 1</Text>
                </View>

                <View style={styles.checkboxAlign}>
                    <Checkbox
                        style={styles.checkbox}
                        value={alto}
                        onValueChange={setAlto}
                        />
                    <Text style={styles.checkboxText}>Alto - Categoria 2</Text>
                </View>

                <View style={styles.checkboxAlign}>
                    <Checkbox
                        style={styles.checkbox}
                        value={baixo}
                        onValueChange={setBaixo}
                        />
                    <Text style={styles.checkboxText}>Baixo - Categoria 3</Text>
                </View>

                <Text style={styles.topic}>Melhoria:</Text>

                <View style={styles.checkboxAlign}>
                    <Checkbox
                        style={styles.checkbox}
                        value={funExiste}
                        onValueChange={setFunExiste}
                        />
                    <Text style={styles.checkboxText}>Funcionalidade existente</Text>
                </View>

                <View style={styles.checkboxAlign}>
                    <Checkbox
                        style={styles.checkbox}
                        value={funNaoExiste}
                        onValueChange={setFunNaoExiste}
                        />
                    <Text style={styles.checkboxText}>Funcionalidade não existente</Text>
                </View>

                <Text style={styles.topic}>Outros:</Text>

                <View style={styles.checkboxAlign}>
                    <Checkbox
                        style={styles.checkbox}
                        value={investigacao}
                        onValueChange={setInvestigacao}
                        />
                    <Text style={styles.checkboxText}>Investigação</Text>
                </View>

                <View style={styles.checkboxAlign}>
                    <Checkbox
                        style={styles.checkbox}
                        value={causaEx}
                        onValueChange={setCausaEx}
                        />
                    <Text style={styles.checkboxText}>Causa Externa</Text>
                </View>

                <Text style={styles.centro2}>Justificativa das ações tomadas</Text>

                <TextInput
                    style={styles.textBox}
                    multiline={true}
                    value={justificativa}
                    onChangeText={setJustificativa}                    
                />
            </View>

            <TouchableOpacity style={styles.enviar} onPress={enviarAnalise}>                
                <Text style={styles.enviarText}>Enviar</Text>
            </TouchableOpacity>

        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container2: {
      flex: 1.0,
      backgroundColor: '#F2F2F2',
    },  
    
    titulo: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 10,
        marginBottom: 10,
    },


    mid: {
        width: '90%',
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: 4,
        shadowColor: '#000',
        elevation: 8,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '5%',
        fontWeight: 'bold',    
    },

    midText:{
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        color: 'black',
    },

    palavras:{
        fontWeight: 'normal',
        color: 'black',
    },

    centro:{
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },

    centro2:{
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    checkbox: {
        marginLeft: 10,
        height: 25, 
        width: 25,
    },

    checkboxAlign: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5, 
    },

    checkboxText: {
        color: 'black',
        marginLeft: 10,
    },

    topic: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
    },

    textBox: {
        fontSize: 15,
        width: '90%',
        height: 150,
        borderRadius: 5,
        paddingLeft: 10,
        borderWidth: 1,
        textAlignVertical: 'top',
        marginLeft: '5%',
        marginBottom: 15,
    },

    enviar: {
        marginTop: 30,
        width: '35%',
        height: 50,
        marginLeft: '60%',
        backgroundColor: '#1E457E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 20,
      },
    
    enviarText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

  });