import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../../service/api';

export default function ListaChatAdmin({ navigation }) {
  const [chats, setChats] = useState([]);
  const [ro, setRo] = useState([]);
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
      const userToken = await AsyncStorage.getItem('userToken');
      const response = await api.get('ro/getAll', {
        headers: { Authorization: `Bearer ${userToken}` },
      }).then(({ data }) =>{
        const roList = data;
        fetchChats(roList, userToken); // Passamos o token como argumento
        setRo(roList);
      })
    
       setMessages(transformedMessages.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const fetchChats = async (roList, userToken) => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');

      const chats = [];

      for (const ro of roList) {
        try {
          const response = await api.get(`/chat/ro/${ro._id}`, {
            headers: { Authorization: `Bearer ${userToken}` },
          });

          const chat = response.data;
          const roId = chat.ro; // ID da RO associada ao chat

          const roResponse = await api.get(`/ro/getById/${roId}`, {
            headers: { Authorization: `Bearer ${userToken}` },
          });

          const roData = roResponse.data;
          const roTitulo = roData.titulo;

          chat.roTitulo = roTitulo; // Adicionamos o título da RO ao chat

          chats.push(chat);
          console.log('RO ENCONTRADO:', roId, 'Título:', roTitulo);
        } catch (error) {
          console.log('RO NÃO ENCONTRADO:', ro._id);
          // Lidar com o RO não encontrado e continuar para o próximo RO
          continue;
        }
      }

      setChats(chats);
    } catch (error) {
      console.error("Erro ao buscar os chats:", error);
    }
  };

  return (
    <View style={styles.container2}>
      <Text style={styles.titulo}>Chats Abertos</Text>
      {chats.map((chat) => (
        <TouchableOpacity
          key={chat._id}
          style={styles.cards}
          onPress={() => navigation.navigate('Chat', { chatId: chat._id })}
        >
          <Text style={[styles.text, { flex: 1 }]}>
            <Text>{`RO #`}</Text>
            <Text>{chat.roTitulo}</Text>
          </Text>
          <Icon name="chevron-right" size={35} style={styles.iconRight} />
        </TouchableOpacity>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingTop: '10%',
    alignItems: 'center',
  },
  cards: {
    width: '90%',
    height: 70,
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#000',
    flexDirection: 'row',
    elevation: 8,
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui o espaço entre os elementos
  },
  icon: {
    color: '#1D2045',
    marginLeft: 5,
    marginRight: 5,
  },
  iconRight: {
    color: '#1D2045',
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    flex: 1, // Ocupa o espaço disponível
    marginBottom: 5,
    marginTop: 2,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D2045',
    textAlign: 'left',
    fontFamily: 'Inter',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
});
