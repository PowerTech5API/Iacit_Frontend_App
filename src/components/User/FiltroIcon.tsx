import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LimparFiltro from "./LimparFiltro";
import api from "../../service/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardRoUsuarioGeral from "../RO/Cards/CardRoUsuarioGeral";

const tipo = ["Hardware", "Software"];
const dataRo = ["Recente", "Antigo"];
const status = ["Pendente", "Em Atendimento", "Atendinda"];

// const dropdownRefTipo = useRef<SelectDropdown>(null);
// const dropdownRefData = useRef<SelectDropdown>(null);
// const dropdownRefStatus = useRef<SelectDropdown>(null);


export default function FiltroIcon() {

  const [ro, setRo] = useState([]);

  const [a, setA] = useState("tudo");
  const [b, setB] = useState("tudo");
  const [c, setC] = useState("tudo");


 function filtragem(){

 }

 function limpar(){
  // dropdownRefTipo.current.reset();
  // dropdownRefStatus.current.reset();
  // dropdownRefData.current.reset();
  setA("tudo");
  setB("tudo");
  setC("tudo");
 }
 
  useEffect(() => {
    async function fetchData() {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken);

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
          }
        };

        const response = await api.post('ro/filterRoUser', {}, config);
        setRo(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }

    fetchData();
  }, []);
  return (
    <View>
      <View style={styles.filtros1}>
        <SelectDropdown
          // ref={dropdownRefTipo}              
          buttonStyle={styles.filtroBotaoTipo}
          buttonTextStyle={styles.filtroTexto}
          defaultButtonText='Tipo'
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition='right'
          data={tipo}                
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />
        
        <SelectDropdown
          // ref={dropdownRefStatus}              
          buttonStyle={styles.filtroBotao}
          buttonTextStyle={styles.filtroTexto}
          defaultButtonText='Status'
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition='right'
          data={status}                
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />
        <SelectDropdown
          // ref={dropdownRefData}              
          buttonStyle={styles.filtroBotao}
          buttonTextStyle={styles.filtroTexto}
          defaultButtonText='Data'
          renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition='right'
          data={dataRo}                
          onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
          }}
          rowTextForSelection={(item, index) => {
              return item
          }}
        />
      </View>
      <View style={styles.filtros2}>

        <TouchableOpacity style={styles.botaoFiltro} onPress={filtragem}>
          <Text style={styles.botaoFiltroText}>Filtrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLimpar} onPress={limpar}>
          <Text style={styles.botaoLimparText}>Limpar</Text>
        </TouchableOpacity>

      </View>

      <ScrollView>
              {ro.map((item, index) => (
                <CardRoUsuarioGeral key={index} id={item.id} titulo={item.titulo} tipo={item.defeito} status={item.status} data={item.dataRegistro}/>
              ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ 
    topo: {
      alignItems: 'center',
      marginTop: 20,
    },
  
    topoTitulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
  
    filtros1: {
      flexDirection: 'row',
      height: 70,
      alignItems: 'center',
      marginLeft: 20,
    },
  
    alinhamento:{
      justifyContent:'center',
      flexDirection: 'row',
    },
    filtroBotaoTipo:{
      borderWidth: 2,
      borderColor: 'black',
      width: 100,
      marginLeft: 10,
      elevation: 5,
    },

    limparFiltro: {
      marginTop: 10, // Adicione um valor de espaçamento adequado aqui
      fontSize: 13,
      color: 'black',
      textAlign: 'left',
    },

    filtros: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    filtroBotao: {
      width: 100,
      marginLeft: 10,
      elevation: 5,
      borderWidth: 2,
      borderColor: 'black',
    },
  
    filtroTexto: {
      fontSize: 10,
      color: 'black',
      textAlign: 'center',
    },
    botaoFiltro: {
      width: 100,
      height: 50,
      marginLeft: 0,
      elevation: 5,
      borderWidth: 2,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1E457E',
    },
  
    botaoFiltroText: {
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
    botaoLimpar: {
      width: 100,
      height: 50,
      marginLeft: 10,
      elevation: 5,
      borderWidth: 2,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1E457E',
    },
  
    botaoLimparText: {
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    filtros2: {
      flexDirection: 'row',
      height: 70,
      alignItems: 'center',
      marginLeft: 20,
    },
});