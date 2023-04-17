import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import FormContext from '../../contexts/formContext';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import {useNavigation} from '@react-navigation/native';

function RegistroOcorrenciaForm() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    // form1
    orgao: '',
    nome: '',

    //form 2
    //Campos Software
    versaoBaseDados: '',
    versaoSoftware: '',
    anexo: '',

    //Campos de Hardware
    equipamento: '',
    posicao: '',
    partNumber: '',
    serialNumber: '',

    //form 3
    titulo: '',
    descricao: '',
    status: 'Em andamento',
  });

  const {isHardwareSelected, isSoftwareSelected} = useContext(FormContext);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    if (isHardwareSelected) {
      setFormData({
        ...formData,
        versaoBaseDados: '',
        versaoSoftware: '',
        anexo: '',
      });
    }
    if (isSoftwareSelected) {
      setFormData({
        ...formData,
        equipamento: '',
        posicao: '',
        partNumber: '',
        serialNumber: '',
      });
    }
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      console.log('Form Data: ', formData);
      setFormSubmitted(false); // Reinicia o valor para falso
    }
  }, [formSubmitted, formData]);

  const [screen, setScreen] = useState(0);
  const FormTitle = [
    'Registro de Ocorrência',
    'Classificação em Campo',
    'Dados Ocorrência',
  ];

  const isLastScreen = screen === FormTitle.length - 1;

  const ScreenDisplay = () => {
    if (screen == 0) {
      return <Form1 formData={formData} setFormData={setFormData} />;
    } else if (screen == 1) {
      return <Form2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Form3 formData={formData} setFormData={setFormData} />;
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
          <Text style={styles.buttonsText}>Registros</Text>
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
