import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import api from '../../service/api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from '../User/AuthProvider';

export default function NovoChat() {
  const {id} = useAuth();
  const navigation = useNavigation();
  const [ro, setRo] = useState([]);
  const [chat,setChat] = useState([]);
  const [selectedRoId, setSelectedRoId] = useState(null);
  const [loading, setLoading] = useState(true); 


  //pega os ROs do usuário logado com estados 'Pendente' e 'Em atendimento'
  useEffect(() => {
    async function fetchROs() {
      try {
        const userToken = await AsyncStorage.getItem("userToken");
        const response = await api.get('ro/userStatus/Pendente', {
          headers: { Authorization: `Bearer ${userToken}` }
        });

        const pendenteROs = response.data;



        const response2 = await api.get('ro/userStatus/Em atendimento', {
          headers: { Authorization: `Bearer ${userToken}` }
        });

        const emAtendimentoROs = response2.data;

        const roList = [...pendenteROs, ...emAtendimentoROs];


        setRo(roList);
        await fetchChats(roList, userToken); // Chama fetchChats após definir as ROs
      } catch (error) {
        console.log(error);
        // Trate os erros de recuperação das ROs
      }
    }
    fetchROs();
  }, []);


// verifica se as ROs puxadas já possuem um chat
const fetchChats = async (roList, userToken) => {
  try {
    const roIds = roList.map((ro) => ro._id); // Array de IDs das ROs
    console.log("RO IDs:", roIds);

    const chatIds = []; // Array de IDs dos chats existentes

    for (const roId of roIds) {
      try {
        const response = await api.get(`/chat/ro/${roId}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        });

        const chat = response.data;

      
        const RoResponse = await api.get(`/ro/getById/${roId}`, {
            headers: { Authorization: `Bearer ${userToken}` },
          });

          const RoData = RoResponse.data;
          const roTitulo = RoData.titulo;


        chatIds.push(chat);

        //console.log('RO ENCONTRADO:', roId);
      } catch (error) {
        //console.log('RO NÃO ENCONTRADO:', roId);
        continue;
      }
    }
    const rosSemChat = roList.filter((ro) => !chatIds.find((chat) => chat.ro === ro._id));
    //console.log('IDs dos ROs sem chat:', rosSemChat);

    setChat(rosSemChat);
    setLoading(false); // define loading falso após a busca dos chats
  } catch (error) {
    console.error("Erro ao buscar chats:", error);
  }
};


  //inicia um chat com o Id do usuário logado e o Id do RO selecionado na lista
async function NewChat(roId) {
  const userId = id;
  try {
    const userToken = await AsyncStorage.getItem('userToken');
    const chatResponse = await api.post(
      '/chat/newChat',
      {
        roId: roId,
        users: [userId],
      },
      {
        headers: { Authorization: `Bearer ${userToken}` }
      }
    );
    const chatId = chatResponse.data._id;
    console.log('Chat criado com sucesso! RO:', roId, 'Chat:', chatId);

    // navegar para o chat passando o ID do chat 
    navigation.navigate('Chat', { chatId: chatId, roTitulo: chat.roTitulo });
  } catch (error) {
    console.error('Erro ao criar o Chat:', error);
  }
}
  
const handleChatPress = async (roId) => {
  setSelectedRoId(roId);
  const userToken = await AsyncStorage.getItem("userToken");
  await fetchChats(ro, userToken);

  const chatIds = chat.map((chat) => chat.ro); // obter IDs dos chats existentes

  if (!chatIds.includes(roId)) {
    await NewChat(roId); 
  } else {
    console.log("A RO já possui um chat aberto!");
  }
};

return (
  <View style={styles.container2}>
    <Text style={styles.titulo}>Chats</Text>
    {loading ? (
        <ActivityIndicator size="large" color="#808080" style={styles.loadingIndicator} />
      ) : chat.length === 0 ? (
        <Text style={styles.semChatsText}>Não há chats abertos</Text>
      ) : (chat.map(Ro => (
      <TouchableOpacity
        key={Ro._id}
        style={styles.cards}
        onPress={() => handleChatPress(Ro._id)}
      >
        <Text style={[styles.text, { flex: 1 }]}>
          <Text>{`RO #`}</Text>
          <Text>{Ro.titulo}</Text>
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
  semChatsText: {
    fontSize: 18,
    fontWeight: 'regular',
    color: '#808080',
    marginTop: 200,
  },
  loadingIndicator: {
    marginTop: '50%',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
});