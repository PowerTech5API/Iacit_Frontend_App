import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LimparFiltro from "../../User/LimparFiltro";
import CardRoGeral from "../RO/Cards/CardRoGeral";
import { useNavigation } from "@react-navigation/native";


export default function FiltroIconAdm() {

  const navigation = useNavigation();

  const tipo = ["hardware", "software"];

  const dataRo = ["Recente", "Antigo"];

  const users = [""];

  const status = ["Pendente", "Em atendimento", "Atendida"];

  const [ro, setRo] = useState([]);

  useEffect(() => {
    async function Teste(){
      await api.get('ro/getAll').then(({data}) =>{
        setRo(data);
      })
    }
    Teste();
  }, [])


  const [a, setA] = useState("tudo");
  const [c, setC] = useState("tudo");
  const [d, setD] = useState("tudo");

  async function filtragem(){
    console.log(a)
    console.log(c)
    console.log(d)  
    
    if(a == "tudo" && c == "tudo" && d == "tudo"){
      await api.get('ro/getAll').then(({data}) =>{
        setRo(data);
      })
    }

    if(a == "hardware" && c == "Pendente" && d == "tudo"){
      await api.post('ro/filterRo', {"defeito": a, "status": c}).then(({data}) =>{
        setRo(data)
      })
    }

    if(a != "tudo" && c == "tudo" && d == "tudo"){
      await api.post('ro/filterRo', {"defeito": a}).then(({data}) =>{
        setRo(data)
      })
    }

    if(a == "tudo" && c != "tudo" && d == "tudo"){
      await api.post('ro/filterRo', {"status": c}).then(({data}) =>{
        setRo(data)
      })
    }

    if(a == "tudo" && c == "tudo" && d == "Antigo"){
      await api.post('ro/filterRo', {"dataOrg": 1}).then(({data}) =>{
        setRo(data)
      })
    }

    if(a == "tudo" && c == "tudo" && d == "Recente"){
      await api.post('ro/filterRo', {"dataOrg": -1}).then(({data}) =>{
        setRo(data)
      })
    }

    if(a != "tudo" && c == "tudo" && d == "Antigo"){
      await api.post('ro/filterRo', {"defeito": a, "dataOrg": 1}).then(({data}) =>{
        setRo(data)
      })
    }

    if(a != "tudo" && c == "tudo" && d == "Recente"){
      await api.post('ro/filterRo', {"defeito": a, "dataOrg": -1}).then(({data}) =>{
        setRo(data)
      })
    }

    if(a == "tudo" && c != "tudo" && d == "Antigo"){
      await api.post('ro/filterRo', {"status": c, "dataOrg": 1}).then(({data}) =>{
        setRo(data)
      })
    }

    if(a == "tudo" && c != "tudo" && d == "Recente"){
      await api.post('ro/filterRo', {"status": c, "dataOrg": -1}).then(({data}) =>{
        setRo(data)
      })
    }
  }

  return(
    <View>
      <View style={styles.filtros}>
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
            setA(selectedItem)
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
          search
          defaultButtonText='Usuários'
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition='right'
          data={users}                
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
            setC(selectedItem)
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
              setD(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
          />
        

        <TouchableOpacity style={styles.filtroBotao} onPress={filtragem}>
          <Text style={styles.botaoFiltroText}>Filtrar</Text>
        </TouchableOpacity>

      </View>
      <View>
          < LimparFiltro />
      </View>
    
      <ScrollView>
        {ro.map((item, index) => (
          <CardRoGeral key={index} titulo={item.titulo} tipo={item.defeito} usuario={item.nomeRelator} status={item.status}/>
        ))}            
      </ScrollView>
      

    </View>
 
  );
}

const styles = StyleSheet.create({

  filtroTitulo: {    
    color: 'black',
    fontSize: 12,   
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

  filtros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  filtroBotaoTipo:{
    width: '20%',
    height: 30,
    marginLeft: 10,
    marginRight: 8,
    elevation: 5,
    borderWidth: 2,
    borderColor: 'black',
    
  },
});

