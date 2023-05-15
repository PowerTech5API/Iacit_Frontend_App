import React from "react";
import { StyleSheet, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const tipo = ["Hardware", "Software"];
const dataRo = ["Recente", "Antigo"];
const orgao = [];
const status = ["Pendente", "Em Atendimento", "Atendinda"];

export default function FiltroIcon(){
    return(
       <View style={styles.alinhamento}>
        <SelectDropdown              
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
          buttonStyle={styles.filtroBotao}
          buttonTextStyle={styles.filtroTexto}
          defaultButtonText='Orgão'
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition='right'
          data={orgao}                
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
  
    filtro: {    
      marginTop: 20,
      paddingLeft: 20,      
    },
  
    filtroTitulo: {    
      color: 'black',
      fontSize: 12,   
    },
  
    filtros1: {
      flexDirection: 'row',
      height: 70,
      alignItems: 'center',
    },
  
    filtros2: {
      flexDirection: 'row',
      height: 70,
      alignItems: 'center',
    },
  
    filtroBotao: {
      width: '23%',
      height: 30,
      marginLeft: 10,
      elevation: 5,
      borderWidth: 2,
      borderColor: 'black',
    },
  
    filtroTexto: {
      fontSize: 13,
      color: 'black',
      textAlign:'left',
    },
    alinhamento:{
      justifyContent:'center',
      flexDirection: 'row',
    },
    filtroBotaoTipo:{
      width: '20%',
      height: 30,
      marginLeft: 10,
      marginRight: 8,
      elevation: 5,
      borderWidth: 2,
      borderColor: 'black',
    }
});