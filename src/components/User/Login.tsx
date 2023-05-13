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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../User/AuthProvider';
import {whiteLogo} from '../../imgs/Images'

   // Função para obter o userResponse
   export async function getAdmin(userToken) {
    try {
      const userResponse = await api.get('user/admin', {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      return userResponse;
    } catch (error) {
      console.error('Erro ao verificar se o usuário é admin:', error);
      throw error;
    }
  }
  
  // Função para redirecionamento com base no isAdmin
  export function handleRedirect  (isAdmin, navigation) {

    if (isAdmin === true) {
      navigation.navigate('DrawerADM', { screen: 'AdminMenu' });
    } else {
      navigation.navigate('DrawerUser', { screen: 'UserMenu' });
    }
  };
  

const schema = yup.object({
  email: yup.string().email('Email Invalido').required('Informe seu email'),
  password: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 digitos')
    .required('Informe sua senha'),
});

export default function Login({navigation}) {
  const { setName, setEmail} = useAuth();
  
  const {
    control,
    handleSubmit,   
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

   // Função para obter os dados do administrador
  const getUserDados = (userResponse) => {
    console.log('É Admin?', userResponse.data.isAdmin);
    console.log('Nome:', userResponse.data.name);
    console.log('E-mail:', userResponse.data.email);

    setName(userResponse.data.name);
    setEmail(userResponse.data.email);
  };

  async function handleSignIn(data) {
    try {
      const response = await api.post('user/login', data);
      await AsyncStorage.setItem('userToken', response.data);
      const userToken = await AsyncStorage.getItem('userToken');

      console.log('Usuário Logado! Token: ',userToken);

      const userResponse = await getAdmin(userToken);

      // Obter os dados do administrador
      getUserDados(userResponse);

      // Redirecionar com base no isAdmin
      handleRedirect(userResponse.data.isAdmin, navigation);

      const { name, email } = userResponse.data;

    } catch (error) {
      console.error('Erro ao fazer login:', error);
      console.error('Usuário ou senha inválidos');
    }
  }
  
  return (
    <>
      <View style={styles.container1}>
        <Image source={whiteLogo} />
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
              secureTextEntry={true}
            />
          )}
        />

        {errors.password && (
          <Text style={styles.labelError}>{errors.password?.message}</Text>
        )}
        

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleSignIn)}> 
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

