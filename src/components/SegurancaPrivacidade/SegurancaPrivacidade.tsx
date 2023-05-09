import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import api from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SegurancaPrivacidade = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showConfirmButton, setShowConfirmButton] = useState(false);

  const handleSendEmailChange = async (isChecked) => {
    setIsChecked(isChecked);
    setShowConfirmButton(true);
  };

  const handleConfirmSendEmail = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      await api.put(`/user`, { isSendEmail: isChecked }, { headers: { Authorization: `Bearer ${userToken}` } });
      setShowConfirmButton(false);
      Alert.alert("Sucesso", "O estado de envio de e-mail foi atualizado com sucesso.");
    } catch (err) {
      console.log(err);
      Alert.alert("Erro", "Houve um erro ao atualizar o estado de envio de e-mail. Por favor, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Política de privacidade</Text>
      </View>

      <View style={styles.contentContainer}>
      <ScrollView>
 
        <Text style={styles.contentTitle}>Índice:</Text>

        <Text style={styles.index}>1. Termos de uso</Text>
        <Text style={styles.index}>  1.2. Criação de conta</Text>
        <Text style={styles.index}>  1.3. Responsabilidades do usuário</Text>
        <Text style={styles.index}>  1.4. Uso do serviço</Text>
        <Text style={styles.index}>  1.5. Acesso não autorizado</Text>
        <Text style={styles.index}>2. Política de privacidade</Text>
        <Text style={styles.index}>  2.1. Coleta de informações</Text>
        <Text style={styles.index}>  2.2. Uso do e-mail</Text>
        <Text style={styles.index}>  2.3. Compartilhamento de informações</Text>
        <Text style={styles.index}>  2.4. Segurança das informações</Text>
        <Text style={styles.index}>  2.5. Modificações na política de privacidade</Text>

        <Text style={styles.contentTitle}>1. Termos de uso:</Text>

        <Text style={styles.subtitle}>1.2. Criação de conta</Text>
        <Text style={styles.paragraph}>Ao criar uma conta neste serviço, você concorda em fornecer informações precisas e atualizadas, incluindo seu nome e endereço de e-mail.</Text>

        <Text style={styles.subtitle}>1.3. Responsabilidades do usuário</Text>
        <Text style={styles.paragraph}>Ao utilizar este serviço, você concorda em ser responsável por todas as atividades associadas à sua conta.
          Você concorda em não compartilhar sua senha ou permitir que terceiros acessem sua conta.</Text>

        <Text style={styles.subtitle}>1.4. Uso do serviço</Text>
        <Text style={styles.paragraph}>Você concorda em usar este serviço apenas para fins legítimos e não para qualquer atividade ilegal ou fraudulenta.</Text>

        <Text style={styles.subtitle}>1.5. Acesso não autorizado</Text>
        <Text style={styles.paragraph}>Você reconhece que o acesso ou uso não autorizado do serviço pode resultar em danos irreparáveis ​​ao serviço e concorda que o serviço terá o direito de buscar medidas cautelares ou outras medidas apropriadas em caso de tal violação.</Text>


        <Text style={styles.contentTitle}>2. Política de privacidade:</Text>

        <Text style={styles.subtitle}>2.1. Coleta de informações</Text>
        <Text style={styles.paragraph}>O serviço coleta informações de nome e e-mail para criação da conta. Essas informações serão usadas apenas para autenticar sua conta e permitir que você acesse o serviço.</Text>

        <Text style={styles.subtitle}>2.2. Uso do e-mail</Text>
        <Text style={styles.paragraph}>O serviço pode usar o endereço de e-mail fornecido para enviar notificações sobre o status dos Registros de Ocorrências abertos pelo usuário. Essas notificações incluem atualizações do status da RO e outras informações relevantes para o andamento da solicitação.</Text>
        
        <Text style={styles.subtitle}>2.3. Compartilhamento de informações</Text>
        <Text style={styles.paragraph}>O serviço não compartilha informações pessoais com terceiros, exceto quando exigido por lei ou quando necessário para fornecer o serviço.</Text>

        <Text style={styles.subtitle}>2.4. Segurança das informações</Text>
        <Text style={styles.paragraph}>O serviço toma medidas de segurança adequadas para proteger suas informações pessoais e manter sua privacidade.
        O serviço usa medidas de segurança física, eletrônica e administrativa para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação.</Text>

        <Text style={styles.subtitle}>2.5. Modificações na política de privacidade</Text>
        <Text style={styles.paragraph}>O serviço reserva o direito de modificar esta política de privacidade a qualquer momento.
        Quaisquer alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação.
        O uso continuado do serviço após qualquer alteração nesta política de privacidade constituirá sua aceitação de tais alterações.</Text>

</ScrollView>

        <View >
          <Text style={styles.data}>Última atualização: --/--/--</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={handleSendEmailChange}
            style={styles.checkbox}
          />
          <Text>Eu li e concordo com os termos.</Text>
        </View>
        {showConfirmButton && (
          <TouchableOpacity
            style={[styles.button, { opacity: isChecked ? 1 : 0.5 }]}
            disabled={!isChecked}
            onPress={handleConfirmSendEmail}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
};

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: 50,
      paddingHorizontal: 20,
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: 15,
    },
    title: {
      fontSize: 25,
      color: '#1C1F44',
      fontWeight: 'bold',
    },


    
    contentContainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 20,
      justifyContent: 'center',
    },

    contentTitle:{
      fontSize: 16,
      color: '#1C1F44',
      fontWeight: 'bold',
    },
      subtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
      },
      paragraph: {
      fontSize: 14,
      marginBottom: 10,
      },
      index: {
        fontSize: 16,
        marginBottom: 5,
      },

    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginTop:20,
    },
    checkbox: {
      marginRight: 10,
    },


    text: {
      fontSize: 16,
      marginBottom: 20,
      padding:10,
    },

    
    button: {
      backgroundColor: '#1E457E',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },

    data: {
      fontSize: 12,
      fontWeight: 'bold',
      paddingTop:10,
    },
  });
export default SegurancaPrivacidade;

/* 

    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Índice:</Text>
        <Text style={styles.index}>I. Termos de uso</Text>
        <Text style={styles.index}>  A. Criação de conta</Text>
        <Text style={styles.index}>  B. Responsabilidades do usuário</Text>
        <Text style={styles.index}>  C. Uso do serviço</Text>
        <Text style={styles.index}>  D. Acesso não autorizado</Text>
        <Text style={styles.index}>II. Política de privacidade</Text>
        <Text style={styles.index}>  A. Coleta de informações</Text>
        <Text style={styles.index}>  B. Uso do e-mail</Text>
        <Text style={styles.index}>  C. Compartilhamento de informações</Text>
        <Text style={styles.index}>  D. Segurança das informações</Text>
        <Text style={styles.index}>  E. Modificações na política de privacidade</Text>
      </View>

      <View>
        <Text style={styles.title}>Termos de uso:</Text>

        <Text style={styles.subtitle}>A. Criação de conta</Text>
        <Text style={styles.paragraph}>Ao criar uma conta neste serviço, você concorda em fornecer informações precisas e atualizadas, incluindo seu nome e endereço de e-mail.</Text>

        <Text style={styles.subtitle}>B. Responsabilidades do usuário</Text>
        <Text style={styles.paragraph}>Ao utilizar este serviço, você concorda em ser responsável por todas as atividades associadas à sua conta.
          Você concorda em não compartilhar sua senha ou permitir que terceiros acessem sua conta.</Text>

        <Text style={styles.subtitle}>C. Uso do serviço</Text>
        <Text style={styles.paragraph}>Você concorda em usar este serviço apenas para fins legítimos e não para qualquer atividade ilegal ou fraudulenta.</Text>

        <Text style={styles.subtitle}>D. Acesso não autorizado</Text>
        <Text style={styles.paragraph}>Você reconhece que o acesso ou uso não autorizado do serviço pode resultar em danos irreparáveis ​​ao serviço e concorda que o serviço terá o direito de buscar medidas cautelares ou outras medidas apropriadas em caso de tal violação.</Text>
      </View>

      <View>
        <Text style={styles.title}>Política de privacidade:</Text>

        <Text style={styles.subtitle}>A. Coleta de informações</Text>
        <Text style={styles.paragraph}>O serviço coleta informações de nome e e-mail para criação da conta. Essas informações serão usadas apenas para autenticar sua conta e permitir que você acesse o serviço.</Text>

        <Text style={styles.subtitle}>B. Uso do e-mail</Text>
        <Text style={styles.paragraph}>O serviço pode usar o endereço de e-mail fornecido para enviar notificações sobre o status dos Registros de Ocorrências abertos pelo usuário. Essas notificações incluem atualizações do status da RO e outras informações relevantes para o andamento da solicitação.</Text>
        <Text style={styles.subtitle}>C. Compartilhamento de informações</Text>
<Text style={styles.paragraph}>O serviço não compartilha informações pessoais com terceiros, exceto quando exigido por lei ou quando necessário para fornecer o serviço.</Text>

<Text style={styles.subtitle}>D. Segurança das informações</Text>
<Text style={styles.paragraph}>O serviço toma medidas de segurança adequadas para proteger suas informações pessoais e manter sua privacidade.
O serviço usa medidas de segurança física, eletrônica e administrativa para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação.</Text>

<Text style={styles.subtitle}>E. Modificações na política de privacidade</Text>
<Text style={styles.paragraph}>O serviço reserva o direito de modificar esta política de privacidade a qualquer momento.
Quaisquer alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação.
O uso continuado do serviço após qualquer alteração nesta política de privacidade constituirá sua aceitação de tais alterações.</Text>

</ScrollView>
</View>




container: {
flex: 1,
padding: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
marginBottom: 20,
},
subtitle: {
fontSize: 20,
fontWeight: 'bold',
marginTop: 20,
marginBottom: 10,
},
paragraph: {
fontSize: 16,
textAlign: 'justify',
marginBottom: 10,
},
});

export default App;

Copy code




User
continue
ChatGPT
itação.</Text>

mathematica
Copy code
    <Text style={styles.subtitle}>C. Compartilhamento de informações</Text>
    <Text style={styles.paragraph}>O serviço não compartilha informações pessoais com terceiros, exceto quando exigido por lei ou quando necessário para fornecer o serviço.</Text>

    <Text style={styles.subtitle}>D. Segurança das informações</Text>
    <Text style={styles.paragraph}>O serviço toma medidas de segurança adequadas para proteger suas informações pessoais e manter sua privacidade.
    O serviço usa medidas de segurança física, eletrônica e administrativa para proteger suas informações pessoais contra acesso não autorizado, uso ou divulgação.</Text>

    <Text style={styles.subtitle}>E. Modificações na política de privacidade</Text>
    <Text style={styles.paragraph}>O serviço reserva o direito de modificar esta política de privacidade a qualquer momento.
    Quaisquer alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação.
    O uso continuado do serviço após qualquer alteração nesta política de privacidade constituirá sua aceitação de tais alterações.</Text>
  </ScrollView>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 20,
},
title: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
subtitle: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 10,
marginBottom: 5,
},
paragraph: {
fontSize: 14,
marginBottom: 10,
},



*/