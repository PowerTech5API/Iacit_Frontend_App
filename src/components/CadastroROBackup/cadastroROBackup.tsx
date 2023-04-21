import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import api from '../../service/api'

export default function CadastroROBackup() {
  const navigation = useNavigation();

  const [isHardwareSelected, setIsHardwareSelected] = useState(false);
  const [isSoftwareSelected, setIsSoftwareSelected] = useState(false);

  const [orgao, setOrgao] = useState('');
  const [dataRegistro, setDataRegistro] = useState('');
  const [horaRegistro, setHoraRegistro] = useState('');
  const [nomeRelator, setNomeRelator] = useState('');
  const [nomeresponsavel, setNomeResponsavel] = useState('');
  const [nomeColaborador, setNomeColaborador] = useState('');
  const [defeito, setDefeito] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [posicao, setPosicao] = useState('');
  const [partnumber, setPartNumber] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [versaoBD, setVersaoBD] = useState('');
  const [versaoSoftware, setVersaoSoftware] = useState('');
  const [LogsRo, setLogsRo] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('');
  const [categoria, setCategoria] = useState('');

  async function Exibir(){
    if(isHardwareSelected){
        const data = {
            orgao,
            dataRegistro,
            horaRegistro,
            nomeRelator,
            nomeresponsavel,
            nomeColaborador,
            defeito,
            "hardware": {
                equipamento,
                posicao, 
                partnumber,
                serialNumber,
            },
            "software":{},
            titulo,
            descricao,
            status,
            categoria            
        }
        await api.post('ro/create',(data)).then((response) =>  {            
            console.log(response.data);   
          }).catch(function (error) {
            console.error("RO Erro");
          })
    }else{
        const data = {
            orgao,
            dataRegistro,
            horaRegistro,
            nomeRelator,
            nomeresponsavel,
            nomeColaborador,
            defeito,
            "hardware":{},
            "software": {
                versaoBD,
                versaoSoftware,
                LogsRo
            },
            titulo,
            descricao,
            status,
            categoria       
          }
          await api.post('ro/create',(data)).then((response) =>  {            
            console.log(response.data);   
          }).catch(function (error) {
            console.error("RO Erro");
          })  
    }

  }

  return (
    <>
      <View style={styles.container1}>
        <Image style={styles.img1} source={require('../../imgs/config.png')} />
        <Image
          style={styles.img2}
          source={require('../../imgs/notificacao.png')}
        />
      </View>

      <View style={styles.container2}>
        <ScrollView>
        <View style={styles.Titulo}> 
          <Text style={styles.TituloTexto}>Cadastrar RO</Text>
        </View>
        <TextInput
            style={styles.inputView}
            placeholder="Orgao"
            value={orgao}
            onChangeText={setOrgao}
       />
       <TextInput
            style={styles.inputView}
            placeholder="Data Registro"
            value={dataRegistro}
            onChangeText={setDataRegistro}
       />
       <TextInput
            style={styles.inputView}
            placeholder="Hora Registro"
            value={horaRegistro}
            onChangeText={setHoraRegistro}
       />
       <TextInput
            style={styles.inputView}
            placeholder="Nome Relator"
            value={nomeRelator}
            onChangeText={setNomeRelator}
       />
       <TextInput
            style={styles.inputView}
            placeholder="Nome Responsavel"
            value={nomeresponsavel}
            onChangeText={setNomeResponsavel}
       />
       <TextInput
            style={styles.inputView}
            placeholder="Nome Colaborador"
            value={nomeColaborador}
            onChangeText={setNomeColaborador}
       />
       <TextInput
            style={styles.inputView}
            placeholder="Defeito"
            value={defeito}
            onChangeText={setDefeito}
       />    
      <View style={styles.checkboxesContainer}>      
        <Checkbox
          value={isHardwareSelected}
          onValueChange={() => setIsHardwareSelected(!isHardwareSelected)}
        />
        <Text style={styles.checkboxText}>Hardware</Text>
        <Checkbox
          value={isSoftwareSelected}
          onValueChange={() => setIsSoftwareSelected(!isSoftwareSelected)}
        />
        <Text style={styles.checkboxText}>Software</Text>
      </View>
      {isHardwareSelected && (
        <View>
          <TextInput
            style={styles.inputView}
            placeholder="Equipamento"
            value={equipamento}
            onChangeText={setEquipamento}
          />
          <TextInput
            style={styles.inputView}
            placeholder="Posição"
            value={posicao}
            onChangeText={setPosicao}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Part Number"
            value={partnumber}
            onChangeText={setPartNumber}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Serial Number"
            value={serialNumber}
            onChangeText={setSerialNumber}
          />
        </View>
      )}
      {isSoftwareSelected && (
        <View>
          <TextInput
            style={styles.inputView}
            placeholder="Versão Base de Dados"
            value={versaoBD}
            onChangeText={setVersaoBD}
          />
          <TextInput
            style={styles.inputView}
            placeholder="Versão do Software"
            value={versaoSoftware}
            onChangeText={setVersaoSoftware}
          />
          <TextInput
            style={styles.inputView}
            placeholder="Log RO"
            value={LogsRo}
            onChangeText={setLogsRo}
          />
        </View>
      )}
      <TextInput
            style={styles.inputView}
            placeholder="Titulo"
            value={titulo}
            onChangeText={setTitulo}
       />
       <TextInput
            style={styles.inputView}
            placeholder="Descricao"
            value={descricao}
            onChangeText={setDescricao}
       />
       <TextInput
            style={styles.inputView}
            placeholder="Status"
            value={status}
            onChangeText={setStatus}
       />
       <TextInput
            style={styles.inputView}
            placeholder="Categoria"
            value={categoria}
            onChangeText={setCategoria}
       />

        <TouchableOpacity style={styles.botao} onPress={Exibir}>
        <Text style={styles.botaoText}>Cadastrar</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.container3}>
        <View style={styles.button1}>
          <Image source={require('../../imgs/inicio.png')} />
          <Text style={styles.buttonsText}>Inicio</Text>
        </View>
        <View style={styles.button2}>
          <Image source={require('../../imgs/chat.png')} />
          <Text style={styles.buttonsText}>Chat</Text>
        </View>
        <View style={styles.button3}>
          <Image source={require('../../imgs/registros.png')} />
          <Text style={styles.buttonsText}  onPress={ () => navigation.navigate('AcompanharRO') }>Registros</Text>
        </View>
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
    flex: 0.8,
    backgroundColor: '#F2F2F2',
    paddingTop: '10%',
    paddingBottom: '10%',
  },

  Titulo:{
    width: '60%',
    marginLeft: '20%',
    marginBottom: 20,
  },

  TituloTexto:{
    textAlign: 'center',
    fontSize: 25,
    color: '#1D2045',
    fontWeight: 'bold',
  },

  checkboxText: {
    marginLeft: 3,
    marginRight: 5,
  },

  inputView: {
    fontSize: 15,
    width: '60%',
    marginTop: 5,
    marginLeft: '20%',
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  botao: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft: '20%',
    backgroundColor: '#1D2045',
    borderRadius: 5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignContent: 'center',
    width: '60%',
    height: 40,
    marginBottom: 10,
  },

  botaoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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

  checkboxesContainer: {
    marginTop: 7,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
