import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useForm} from 'react-hook-form';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

function RegistroOcorrenciaForm() {
  const [formData, setFormData] = useState({
    // form1
    orgao: '',
    nome: '',

    //form 2
    versaoBaseDados: '',
    versaoSoftware: '',
    anexo: '',

    equipamento: '',
    posicao: '',
    partNumber: '',
    serialNumber: '',

    //form 3
    titulo: '',
    descricao: '',
    status: 'Em andamento',
  });

  const onSubmit = data => console.log(data);
  const {handleSubmit} = useForm({
    defaultValues: {
      // form1
      orgao: '',
      nome: '',

      //form 2
      versaoBaseDados: '',
      versaoSoftware: '',
      anexo: '',

      equipamento: '',
      posicao: '',
      partNumber: '',
      serialNumber: '',

      //form 3
      titulo: '',
      descricao: '',
      status: 'Em andamento',
    },
  });

  const [screen, setScreen] = useState(0);
  const FormTitle = [
    'Registro de Ocorrência',
    'Classificação em Campo',
    'Dados Ocorrência',
  ];

  const ScreenDisplay = () => {
    if (screen == 0) {
      return <Form1 formData={formData} setFormData={setFormData} />;
    } else if (screen == 1) {
      return <Form2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Form3 formData={formData} setFormData={setFormData} />;
    }
  };

  function buttonChange() {
    if (screen === FormTitle.length - 1) {
      return (
        <Text style={styles.button} onPress={handleSubmit(onSubmit)}>
          Enviar
        </Text>
      );
    } else {
      return <Text style={styles.button}>Próximo</Text>;
    }
  }

  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.title}>{FormTitle[screen]}</Text>
        <View style={styles.container2}>{ScreenDisplay()}</View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          disabled={screen === 0}
          onPress={() => {
            setScreen((currScreen: number) => currScreen - 1);
            console.log('Próximo');
          }}>
          <Text style={styles.button}>Anterior</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            if (screen === FormTitle.length - 1) {
              console.log(formData);
            } else {
              setScreen((currScreen: number) => currScreen + 1);
              console.log(screen);
            }
          }}>
          {buttonChange}
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 0.6,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 0.6,
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
});

export default RegistroOcorrenciaForm;
