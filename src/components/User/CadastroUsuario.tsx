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
import api from '../../service/api';

const schema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, 'Entre com um nome valido')
    .required('Informe seu nome'),
  email: yup.string().email('Email Invalido').required('Informe seu email'),
  password: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 digitos')
    .required('Informe sua senha'),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
    .required('Confirme a senha'),
});

export default function CadastroUsuario({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSignIn(data) {
    await api.post('user',(data)).then((response) =>  {
      console.log(response.data);
    }).catch(function (error) {
      console.error("Usuário já existe");
    })
  }

  return (
    <>
      <View style={styles.container1}>
        <Image source={require('../../imgs/logo2.png')}></Image>
      </View>

      <View style={styles.container2}>
        <Text style={styles.title}>Cadastro</Text>

        <Controller
          control={control}
          name="name"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: errors.name && 1,
                  borderColor: errors.name && '#ff375b',
                },
              ]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Nome Completo"   
              placeholderTextColor="black" 
            />
          )}
        />
        {errors.name && (
          <Text style={styles.labelError}>{errors.name?.message}</Text>
        )}

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
              placeholderTextColor="black"            
            />
          )}
        />
        {errors.email && (
          <Text style={styles.labelError}>{errors.email?.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: errors.password && 1,
                  borderColor: errors.password && '#ff375b',
                },
              ]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite sua senha"
              placeholderTextColor="black"        
              secureTextEntry={true}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.labelError}>{errors.password?.message}</Text>
        )}

        <Controller
          control={control}
          name="confirmarSenha"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[
                styles.input,
                {
                  borderWidth: errors.confirmarSenha && 1,
                  borderColor: errors.confirmarSenha && '#ff375b',
                },
              ]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Confirme sua senha"
              placeholderTextColor="black"          
              secureTextEntry={true}
            />
          )}
        />
        {errors.confirmarSenha && (
          <Text style={styles.labelError}>
            {errors.confirmarSenha?.message}
          </Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleSignIn)}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.container3}>
        <TouchableOpacity onPress={ () => navigation.navigate('Login') }>
          <Text style={styles.criarConta}>Efetuar Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 0.25,
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
  container3: {
    flex: 0.15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    //marginTop: 30,
    marginBottom: 15,
    fontSize: 25,
    color: '#1C1F44',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 15,
    width: 250,
    marginTop: 5,
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,    
  },
  button: {
    height: 40,
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
  esqueceu: {
    fontSize: 15,
    color: '#1C1F44',
    marginTop: 15,
    fontStyle: 'italic',
  },
  criarConta: {
    fontSize: 20,
    color: '#1C1F44',
    fontWeight: 'bold',
  },
  labelError: {
    color: '#ff375b',
  },
});
