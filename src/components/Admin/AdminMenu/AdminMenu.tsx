import React, { useState, useEffect, useRef } from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CardRoGeral from '../RO/Cards/CardRoGeral';
import api from '../../../service/api';


export default function AdminMenu() {
  const navigation = useNavigation();

  const tipo = ["hardware", "software"];

  const dataRo = ["Recente", "Antigo"];

  const [users, setUsers] = useState(new Array<String>);

  const [users2, setUsers2] = useState([]);

  const status = ["Pendente", "Em atendimento", "Atendida"];

  const dropdownRefTipo = useRef<SelectDropdown>(null);

  const dropdownRefUsuarios = useRef<SelectDropdown>(null);

  const dropdownRefStatus = useRef<SelectDropdown>(null);

  const dropdownRefData = useRef<SelectDropdown>(null);

  const [ro, setRo] = useState([]);

  useEffect(() => {
    async function Teste(){
      
      await api.get('ro/getAll').then(({data}) =>{
        setRo(data);
      })
      
    }    

    Teste();

  }, [])

  useEffect(() => {
    async function Teste(){
      await api.get('user/getAll').then(({data}) =>{
        setUsers2(data);
      })
    }

    users2.map((item, index) => (
      users.push(item.name)
    )) 
    console.log(users)
    

    Teste();
  }, [])

  const [a, setA] = useState("tudo");
  const [b, setB] = useState("tudo");
  const [c, setC] = useState("tudo");
  const [d, setD] = useState("tudo");

  async function filtragem(){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)  
    
    if(a == "tudo" && b == "tudo" && c == "tudo" && d == "tudo"){
      await api.get('ro/getAll').then(({data}) =>{
        setRo(data);
      })
    }

    if(a != "tudo" && b != "tudo" && c != "tudo" && d != "tudo"){
      await api.post('ro/filterRo', {"defeito": a, "nomeRelator": b, "status": c, "dataOrg": d}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a != "tudo" && b == "tudo" && c == "tudo" && d == "tudo"){
      await api.post('ro/filterRo', {"defeito": a}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }   
      })
    }

    if(a == "tudo" && b != "tudo" && c == "tudo" && d == "tudo"){
      await api.post('ro/filterRo', {"nomeRelator": b}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }   
      })
    }

    if(a == "tudo" && b == "tudo" && c != "tudo" && d == "tudo"){
      await api.post('ro/filterRo', {"status": c}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }   
      })
    }

    if(a == "tudo" && b == "tudo" && c == "tudo" && d != "tudo"){
      await api.post('ro/filterRo', {"dataOrg": d}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }   
      })
    }

    if(a != "tudo" && b != "tudo" && c == "tudo" && d == "tudo"){
      await api.post('ro/filterRo', {"defeito": a, "nomeRelator": b}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a != "tudo" && b == "tudo" && c != "tudo" && d == "tudo"){
      await api.post('ro/filterRo', {"defeito": a, "status": c}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a != "tudo" && b == "tudo" && c == "tudo" && d != "tudo"){
      await api.post('ro/filterRo', {"defeito": a, "dataOrg": d}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a != "tudo" && b != "tudo" && c != "tudo" && d == "tudo"){
      await api.post('ro/filterRo', {"defeito": a, "nomeRelator": b, "status": c}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a != "tudo" && b != "tudo" && c == "tudo" && d != "tudo"){
      await api.post('ro/filterRo', {"defeito": a, "nomeRelator": b, "dataOrg": d}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a != "tudo" && b == "tudo" && c != "tudo" && d != "tudo"){
      await api.post('ro/filterRo', {"defeito": a, "status": c, "dataOrg": d}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a == "tudo" && b != "tudo" && c != "tudo" && d == "tudo"){
      await api.post('ro/filterRo', {"nomeRelator": b, "status": c}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a == "tudo" && b != "tudo" && c == "tudo" && d != "tudo"){
      await api.post('ro/filterRo', {"nomeRelator": b, "dataOrg": d}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a == "tudo" && b != "tudo" && c != "tudo" && d != "tudo"){
      await api.post('ro/filterRo', {"nomeRelator": b, "status": c, "dataOrg": d}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

    if(a == "tudo" && b == "tudo" && c != "tudo" && d != "tudo"){
      await api.post('ro/filterRo', {"status": c, "dataOrg": d}).then(({data}) =>{
        if(data.msg != undefined){
          console.log("ERRO FUNCIONOU!")
          console.log(data)
          setRo([])
        } else {
          setRo(data)
        }        
      })
    }

  }

  async function limpar(){
    dropdownRefTipo.current.reset();
    dropdownRefUsuarios.current.reset();
    dropdownRefStatus.current.reset();
    dropdownRefData.current.reset();
    setA("tudo");
    setB("tudo");
    setC("tudo");
    setD("tudo");
  }

  
  return (
    <>
      <View style={styles.container2}>

          <View style={styles.topo}>
            <Text style={styles.topoTitulo}>Registros de Ocorrência</Text>
          </View>

          <View style={styles.filtro}>           
            <Text style={styles.filtroTitulo}>Filtrar por:</Text>            
            <View style={styles.filtros1}>

              <SelectDropdown 
                ref={dropdownRefTipo}             
                buttonStyle={styles.filtroBotao}
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
                ref={dropdownRefUsuarios}
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
                  setB(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />

              <SelectDropdown
                ref={dropdownRefStatus}               
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
            
            </View>
            <View style={styles.filtros2}>

            <SelectDropdown 
                ref={dropdownRefData}              
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

            <TouchableOpacity style={styles.botaoFiltro} onPress={filtragem}>
              <Text style={styles.botaoFiltroText}>Filtrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoLimpar} onPress={limpar}>
              <Text style={styles.botaoLimparText}>Limpar</Text>
            </TouchableOpacity>

            </View>
          </View>

          <ScrollView>
            {ro.map((item, index) => (
              <CardRoGeral key={index} id={item._id} titulo={item.titulo} tipo={item.defeito} usuario={item.nomeRelator} status={item.status}/>
            ))}            
          </ScrollView>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#1D2045',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img1: {
    right: 100,
  },
  img2: {
    left: 100,
  },

  container2: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

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

  container3: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  
  button1: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    flex: 0.34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button3: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonsText: {
    fontSize: 11,
    color: '#1E457E',
  },

});
