import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, TouchableOpacity} from 'react-native';
import FormContext from '../../contexts/formContext';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import api from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegistroOcorrenciaForm() {
  const navigation = useNavigation();
  const {isHardwareSelected,setIsHardwareSelected,isSoftwareSelected,setIsSoftwareSelected,} = useContext(FormContext);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [data, setData] = useState({
    orgao: '',
    nomeRelator: '',
    nomeresponsavel: '',
    nomeColaborador: '',
    defeito: '',
    software: {
      versaoBD: '',
      versaoSoftware: '',
      LogsRO: '',
    },
    hardware: {
      equipamento: '',
      posicao: '',
      partnumber: '',
      serialNumber: '',
    },
    titulo: '',
    descricao: '',
    'status': '1',
    'dataRegistro': moment().format('DD-MM-YYYY'),
    'horaRegistro': moment().format('HH:mm:ss'),
    categoria: '',
    resolucao: '',
  });

  //definindo o defeito de acordo com a escolha o usuario no checkbox
  function getDefeito(isHardwareSelected, isSoftwareSelected) {
    let defeitoCheckbox = '';
      if (isHardwareSelected) {
        defeitoCheckbox = 'hardware';
      } else if (isSoftwareSelected) {
        defeitoCheckbox = 'software';
      }
      return defeitoCheckbox;
  }
  useEffect(() => {
    setData(prevState => ({
      ...prevState,
      defeito: getDefeito(isHardwareSelected, isSoftwareSelected),
    }));
  }, [isHardwareSelected, isSoftwareSelected]);  
  
  async function handleSubmit () {
    let formData = data;
    if (isHardwareSelected) {
      formData = {
        ...data,
        hardware: {
          equipamento: data.hardware.equipamento,
          posicao: data.hardware.posicao,
          partnumber: data.hardware.partnumber,
          serialNumber: data.hardware.serialNumber,
        },
        software: {},
      };
    } else if (isSoftwareSelected) {
      formData = {
        ...data,
        software: {
          versaoBD: data.software.versaoBD,
          versaoSoftware: data.software.versaoSoftware,
          LogsRO: data.software.LogsRO,
      },
        hardware: {},
      };
    }
    try {
      const userToken = await AsyncStorage.getItem("userToken")
      await api.post('ro/create', formData, {headers: {Authorization: `Bearer ${userToken}`}});
      setFormSubmitted(true);
      alert('Registro de Ocorrência criado com sucesso!');
    } catch (error) {
      console.error('RO Erro', error);
      alert('Erro ao criar o RO!');
    } finally {
      setData({
        orgao: '',
        nomeRelator: '',
        nomeresponsavel: '',
        nomeColaborador: '',
        defeito: '',
        software: {},
        hardware: {},
        titulo: '',
        descricao: '',
        'dataRegistro': moment().format('DD-MM-YYYY'),
        'horaRegistro': moment().format('HH:mm:ss'),
        'status': '1',
        categoria: '',
        resolucao: '',
      }); //zera os campos formulario
      setIsHardwareSelected(false); //zera checkbox
      setIsSoftwareSelected(false); //zera checkbox
    }
  }

  //verifica se o formulário foi enviado.
  useEffect(() => {
    if (formSubmitted) {
      console.log('data: ',data);
      setFormSubmitted(false); // Reinicia o valor para falso
    }
  }, [formSubmitted, data]);

  //titulos de cada pagina do form
  const FormTitle = [
    'Registro de Ocorrência',
    'Classificação em Campo',
    'Dados Ocorrência',
  ];

  //mudanças de formulario e seus respectivos dados de acordo com a tela
  const [screen, setScreen] = useState(0);
  const isLastScreen = screen === FormTitle.length - 1;
  const ScreenDisplay = () => {
    if (screen == 0) {
      return <Form1 data={data} setData={setData} />;
    } else if (screen == 1) {
      return <Form2 data={data} setData={setData} />;
    } else {
      return <Form3 data={data} setData={setData} />;
    }
  };

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
        <Text style={styles.title}>{FormTitle[screen]}</Text>
        <View style={styles.container2}>{ScreenDisplay()}</View>
      </View>

      {/*// incluir verificação do tipo de usuário que está logado p/ definir para qual menu o botão de anterior deve direcionar*/}
      <View style={styles.buttonContainer}>
        {screen === 0 && (
          <Pressable onPress={() => navigation.navigate('UserMenu')}>
            <Text style={styles.button}>Anterior</Text>
          </Pressable>
        )}
        {screen !== 0 && (
          <Pressable
            onPress={() => {
              setScreen(currScreen => currScreen - 1);
            }}>
            <Text style={styles.button}>Anterior</Text>
          </Pressable>
        )}
        {isLastScreen ? (
          <Pressable onPress={handleSubmit}>
            <Text style={styles.button}>Enviar</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setScreen(currScreen => currScreen + 1);
            }}>
            <Text style={styles.button}>Próximo</Text>
          </Pressable>
        )}
      </View>

      {/* menu navegavel da tela principal */}
      <View style={styles.container3}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('UserMenu')}>
          <Image source={require('../../imgs/inicio.png')} />
          <Text style={styles.buttonsText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image source={require('../../imgs/chat.png')} />
          <Text style={styles.buttonsText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('AcompanharRO')}>
          <Image source={require('../../imgs/registros.png')} />
          <Text style={styles.buttonsText}>Registros</Text>
        </TouchableOpacity>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 15,
    fontSize: 25,
    color: '#1C1F44',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  button: {
    height: 40,
    width: 80,
    backgroundColor: '#1E457E',
    color: 'white',
    marginLeft: 42.5,
    marginRight: 42.5,
    alignItems: 'center',
    borderRadius: 5,
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
});

export default RegistroOcorrenciaForm;
