import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import api from '../../service/api';
import { ConfigContext } from '../../contexts/configContext';
import { useAuth } from '../User/AuthProvider';
import { Alert } from 'react-native';

function TermosPrivacidade({ navigation, handleConfigChange }) {
  const { id } = useAuth();
  const configContext = useContext(ConfigContext);
  const { aceitarTermos, receberEmail, handleAceitarTermos  } = configContext;
  const [termos, setTermos] = useState(null);

  useEffect(() => {
    fetchTerms();
  }, []);

  const fetchTerms = async () => {
    try {
      const response = await api.get('/terms/getAll');
      const sortedTerms = response.data.sort((a, b) => b.version.localeCompare(a.version));
      const latestTerm = sortedTerms[0];
      setTermos(latestTerm);
    } catch (error) {
      console.error(error);
    }
  };

  const renderTopics = (topics) => {
    return topics.map((topic, index) => (
      <View key={`topic-${index}`}>
        <Text style={styles.index}>- {topic.title}</Text>
        {topic.subtopics && topic.subtopics.length > 0 && renderTopics(topic.subtopics)}
      </View>
    ));
  };

  const enviarConfiguracoes = () => {
    const data = {
      userId: id,
      termsAccepted: aceitarTermos,
      receiveEmails: receberEmail,
    };

    console.log('CONFIGURAÇÕES TERMOS :', data);

    api.post('/config/saveConfig', data)
      .then(response => {
        handleConfigChange(data);
        console.log('Configuração salva:', response);
      })
      .catch(error => {
        console.log(error);
      });
      Alert.alert('Sucesso', 'Configurações salvas com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Política de privacidade</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView>
          <Text style={styles.contentTitle}>Índice:</Text>
          {/*tópicoS */}
          {termos && termos.topics && renderTopics(termos.topics)}
          {/* conteúdo do termo */}
          {termos &&
            termos.topics &&
            termos.topics.map((topic) => (
              <View key={topic._id}>
                <Text style={styles.contentTitle}>{topic.title}</Text>
                <Text style={styles.paragraph}>{topic.content}</Text>
                {topic.subtopics.map((subtopic) => (
                  <View key={subtopic._id}>
                    <Text style={styles.subtitle}>{subtopic.title}</Text>
                    <Text style={styles.paragraph}>{subtopic.content}</Text>
                  </View>
                ))}
              </View>
            ))}

          <View>
            <Text style={styles.data}>Última atualização: versão {termos && termos.version}</Text>
          </View>

          <View style={styles.switchContainer}>
          <Switch value={aceitarTermos} onValueChange={handleAceitarTermos} />
            <Text style={styles.text}>Eu aceito os termos</Text>
          </View>

          <TouchableOpacity
             style={styles.button}
            onPress={enviarConfiguracoes}
          >
            <Text style={styles.buttonText}>Salvar Configuração</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </View>
  );
}

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
  contentTitle: {
    fontSize: 16,
    color: '#1C1F44',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 10,
  },
  index: {
    fontSize: 16,
    marginTop: 2,
    marginBottom: 2,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    padding: 10,
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
    paddingTop: 10,
  },
  disabledButton: {
    backgroundColor: '#888888',
  },
});

export default TermosPrivacidade;