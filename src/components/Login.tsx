import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Email Invalido').required('Informe seu email'),
  senha: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 digitos')
    .required('Informe sua senha'),
});

export default function Login({navigation}) {
  
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignIn(data) {
    console.log(data);
  } 

  return (
    <>
      <View style={styles.container1}>
        <Image source={require('../imgs/logo.png')}></Image>
      </View>

      <View style={styles.container2}>
        <Text style={styles.title}>Login</Text>


        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: errors.email && 1,
                  borderColor: errors.email && '#ff375b',
                },
              ]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite seu email"
            />
          )}
        />
        
        {errors.email && (
          <Text style={styles.labelError}>{errors.email?.message}</Text>
        )}
        

        <Controller
          control={control}
          name="senha"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: errors.senha && 1,
                  borderColor: errors.senha && '#ff375b',
                },
              ]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite sua senha"
              secureTextEntry={true}
            />
          )}
        />

        {errors.senha && (
          <Text style={styles.labelError}>{errors.senha?.message}</Text>
        )}
        

        <TouchableOpacity
          style={styles.button}
         /*  onPress={handleSubmit(handleSignIn)}> */
         onPress={ () => navigation.navigate('AcompanharRO') }>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.aceitaTermos}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container3}>
        <TouchableOpacity onPress={ () => navigation.navigate('CadastroUsuario') }>
          <Text style={styles.efetuarLogin}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 0.25,
    backgroundColor: '#1C1F44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 0.6,
    backgroundColor: '#1C1F44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 0.15,
    backgroundColor: '#1C1F44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    //marginTop: 30,
    marginBottom: 20,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 15,
    width: 250,
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 5,
    height: 50,
    paddingLeft: 10,
    opacity: 0.5,
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: '#1E457E',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  aceitaTermos: {
    fontSize: 15,
    color: 'white',
    marginTop: 15,
    fontStyle: 'italic',
  },
  efetuarLogin: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  labelError: {
    color: '#ff375b',
  },
});
