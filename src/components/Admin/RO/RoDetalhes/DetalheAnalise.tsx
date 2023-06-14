import Checkbox from 'expo-checkbox';
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import api from '../../../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetalheAnalise() {
    const [ro, setRo] = useState({});
    const [defeito, setDefeito] = useState("");
    const [melhoria, setMelhoria] = useState("");
    const [outros, setOutros] = useState("");
    const [justificativa, setJustificativa] = useState("");
  
    useEffect(() => {
      async function fetchRo() {
        const roId = await AsyncStorage.getItem("roId");
        const response = await api.get(`ro/getById/${roId}`);
        setRo(response.data);
      }
      fetchRo();
    }, []);
  
    async function enviarAnalise() {
      try {
        const userToken = await AsyncStorage.getItem("userToken");
        const data = {
          _id: ro._id,
          defeito,
          melhorias: melhoria,
          outros,
          justificativa,
        };
        const response = await api.put("ro/analise", data, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        console.log(response.data);
        alert('Registro analisado com sucesso!');
      } catch (error) {
        console.error("RO Erro", error);
        alert("Erro!");
      }
    }
  
    return (
      <View style={styles.container2}>
        <ScrollView>
          <Text style={styles.titulo}>Detalhes do Registro</Text>
  
          <View style={styles.mid}>
            <Text style={styles.midText}>
              Titulo: <Text style={styles.palavras}>{ro.titulo}</Text>
            </Text>
  
            <Text style={styles.midText}>
              Descrição: <Text style={styles.palavras}>{ro.descricao}</Text>
            </Text>
  
            <Text style={styles.midText}>
              Defeito: <Text style={styles.palavras}>{ro.defeito}</Text>
            </Text>
          </View>
  
          <Text style={styles.titulo}>Análise dos registros</Text>
  
          <View style={styles.mid}>
            <Text style={styles.topic}>Data e hora de recebimento:</Text>
            <Text style={styles.centro}>Classificação</Text>
            <Text style={styles.topic}>Defeito:</Text>
  
            <View style={styles.checkboxAlign}>
              <Checkbox
                style={styles.checkbox}
                value={defeito === "Crítico - Categoria 1"}
                onValueChange={() => setDefeito("Crítico - Categoria 1")}
              />
              <Text style={styles.checkboxText}>Crítico - Categoria 1</Text>
            </View>
  
            <View style={styles.checkboxAlign}>
              <Checkbox
                style={styles.checkbox}
                value={defeito === "Alto - Categoria 2"}
                onValueChange={() => setDefeito("Alto - Categoria 2")}
              />
              <Text style={styles.checkboxText}>Alto - Categoria 2</Text>
            </View>
  
            <View style={styles.checkboxAlign}>
              <Checkbox
                style={styles.checkbox}
                value={defeito === "Baixo - Categoria 3"}
                onValueChange={() => setDefeito("Baixo - Categoria 3")}
              />
              <Text style={styles.checkboxText}>Baixo - Categoria 3</Text>
            </View>
  
            <Text style={styles.topic}>Melhoria:</Text>
  
            <View style={styles.checkboxAlign}>
              <Checkbox
                style={styles.checkbox}
                value={melhoria === "Funcionalidade existente"}
                onValueChange={() => setMelhoria("Funcionalidade existente")}
              />
              <Text style={styles.checkboxText}>Funcionalidade existente</Text>
            </View>
  
            <View style={styles.checkboxAlign}>
              <Checkbox
                style={styles.checkbox}
                value={melhoria === "Funcionalidade não existente"}
                onValueChange={() => setMelhoria("Funcionalidade não existente")}
              />
              <Text style={styles.checkboxText}>Funcionalidade não existente</Text>
            </View>
  
            <Text style={styles.topic}>Outros:</Text>
  
            <View style={styles.checkboxAlign}>
              <Checkbox
                style={styles.checkbox}
                value={outros === "Investigação"}
                onValueChange={() => setOutros("Investigação")}
              />
              <Text style={styles.checkboxText}>Investigação</Text>
            </View>
  
            <View style={styles.checkboxAlign}>
              <Checkbox
                style={styles.checkbox}
                value={outros === "Causa Externa"}
                onValueChange={() => setOutros("Causa Externa")}
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
    );
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