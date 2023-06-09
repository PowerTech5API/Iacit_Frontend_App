import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from '../User/AuthProvider';
import { StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';

export default function ListaChat({ navigation }) {
  const { id } = useAuth();
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchROs = async () => {
      try {
        const userToken = await AsyncStorage.getItem("userToken");
        const response = await api.get(`/ro/getAllByUserId/${id}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        const roList = response.data;
        fetchChats(roList, userToken); 
        console.log('ROs do usuário listados');
      } catch (error) {
        console.error('Error fetching ROs:', error);
      }
    };

    fetchROs();
  }, [id]);

  const fetchChats = async (roList, userToken) => {
    try {
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
          const roCodigo = roData.codigo 
          const roStatus = roData.status;

          chat.roTitulo = roTitulo; // add o titulo da RO ao chat
          chat.roCodigo = roCodigo; // add o cod. da RO ao chat

        // Mapear o status do RO para uma string correspondente
        let roStatusString = '';
        if (roStatus === 'Pendente') {
          roStatusString = 'Pendente';
        } else if (roStatus === 'Em atendimento') {
          roStatusString = 'Em atendimento';
        } else if (roStatus === 'Atendida') {
          roStatusString = 'Atendida';
        }

        chat.roStatus = roStatusString; // add a string de status da RO ao chat

        chats.push(chat);
          //console.log('RO ENCONTRADO :', roId, 'Titulo:', roTitulo,'COD: ',roCodigo);
        } catch (error) {
          //console.log('RO NÃO ENCONTRADO:', ro._id);
          continue;
        }
      }
      const rosAtendidas = chats.filter((chat) => chat.roStatus === 'Atendida');
      console.log('Chats com status Atendida:', rosAtendidas);

      
      const rosPendentes = chats.filter((chat) => chat.roStatus === 'Pendente');

      const rosEmAtendimento = chats.filter((chat) => chat.roStatus === 'Em atendimento');

      const roAbertos = [...rosPendentes, ...rosEmAtendimento];

      console.log('ROS ABERTOSSS:', roAbertos);

      setChats(roAbertos);
      setLoading(false); // define loading falso após a busca dos chats
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  return (
    <View style={styles.container2}>
      <Text style={styles.titulo}>Chats Abertos</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#808080" style={styles.loadingIndicator} />
      ) : chats.length === 0 ? (
        <Text style={styles.semChatsText}>Não há chats abertos</Text>
      ) : (
        chats.map((chat) => (
          <TouchableOpacity
            key={chat._id}
            style={styles.cards}
            onPress={() => navigation.navigate("Chat", { chatId: chat._id,roTitulo: chat.roTitulo })}
          >
            <Text style={[styles.text, { flex: 1 }]}>
              <Text style={styles.RegistraRO}>{`RO:  `}</Text>
              <Text style={styles.RegistraRO}>{chat.roTitulo}</Text>
            </Text>
            <Icon name="chevron-right" size={35} style={styles.iconRight} />
          </TouchableOpacity>
        ))
      )}
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
  semChatsText: {
    fontSize: 18,
    fontWeight: 'regular',
    color: '#808080',
    marginTop: 200,
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
    justifyContent: 'space-between',
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
    flex: 1,
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
  loadingIndicator: {
    marginTop: '50%',
  },
  RegistraRO:{
    color: '#1D2045',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 35,
  },
});
