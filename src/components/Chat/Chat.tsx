import React, { useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api'; // Importe a configuração correta da sua API
import { useAuth } from '../User/AuthProvider';
import { Alert, StyleSheet } from 'react-native';

interface ChatMessage {
  senderName: string;
  _id: string;
  sender: string;
  content: string;
  createdAt: Date;
}

interface Chat {
  _id: string;
  messages: ChatMessage[];
}

export function Chat({ chatId }: { chatId: string }) {
  const { id, name } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);

  const loadMessages = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const response = await api.get<Chat>(`/chat/getById/${chatId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      const chat = response.data;
      const giftedChatMessages: IMessage[] = chat.messages.map((message) => ({
        _id: message._id,
        text: message.content,
        createdAt: message.createdAt,
        user: {
          _id: message.sender,
          name: message.senderName,
        },
      }));

      setMessages(giftedChatMessages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const sendMessage = async (newMessages: IMessage[]) => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const messageContent = newMessages[0].text;
      const response = await api.post('/chat/messages', {
        chatId,
        senderId: id,
        content: messageContent,
      }, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      if (response.data.msg === 'Mensagem enviada') {
        const sentMessage: IMessage = {
          _id: response.data.messageId,
          text: messageContent,
          createdAt: new Date(),
          user: {
            _id: id,
            name,
          },
        };

        setMessages((previousMessages) => GiftedChat.append(previousMessages, [sentMessage]));
      } else {
        console.error('Falha ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={sendMessage}
      user={{
        _id: id,
        name,
      }}
    />
  );
}
  /*
  interface IMessage {
    _id: string | number;
    text: string;
    createdAt: Date | number;
    user: {
      _id: string;
      name: string;
      avatar: string;
    };
    sent?: boolean;
    received?: boolean;
    pending?: boolean;
  }

  export interface Message {
  _id: string;
  text: string;
  createdAt: Date;
  user: {
    _id: string;
    name: string;
    avatar?: string;
  };
}

  const [refresh, setRefresh] = useState(false);

  const renderAvatar = (props) => {
    const initials = name
      .split(' ')
      .map((name) => name.charAt(0))
      .join('');
    console.log(initials);
    return (
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
    );
  };

  useEffect(()=>{
    (async () => {
      try {
    const response = await api.get(`/chat/ro/${roId}`);
    console.log(response);
    setMessages(response.data);
  } catch (error) {
    console.log('Erro ao enviar mensagem:', error);
  }
  })();
}, [roId]);


async function enviarMensagem(messages) {
  try {
    const response = await api.post('/chat/messages', {
      sender: id,
      senderName: name,
      content: messages[0].text,
    });
    console.log(response);
    Alert.alert(response.data);
  } catch (error) {
    console.log('Erro ao enviar mensagem:', error);
  }
}

let giftedChatMessages = messages.map((chatMessage) => {
  let gcm = {
    _id: chatMessage.id,
    text: chatMessage.content,
    user: {
      _id: chatMessage.id,
      name: chatMessage.name,
    },
  };
  return gcm;
});

// console.log(giftedChatMessages)
const onSend = useCallback(async (messages = []) => {
  setRefresh(true);
  setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  await enviarMensagem(messages);
}, [enviarMensagem]);

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: id,
        name: name,
        avatar: renderAvatar,
      }}
    />
  );
}
*/


  const styles = StyleSheet.create({
    avatarContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });


   /* const onSend = useCallback(async (messages = []) => {
    try {
      const response = await api.post('/chat/messages', {
        senderId: id,
        chatId: chatId,
        content: messages[0].text,
      });

      // Lógica adicional para manipular a resposta do servidor, se necessário

    } catch (error) {
      console.log('Erro ao enviar mensagem:', error);
    }
  }, [id, chatId]);
*/

/*
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import api from '../../service/api';
import { useAuth } from '../User/AuthProvider';
import { useRoute } from '@react-navigation/native';

export function Chat() {
  const { name, id } = useAuth();
  const route = useRoute();
  const { roId } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchChatMessages() {
      console.log('RO que veio da tela anterior:', roId);
      try {
        const response = await api.get(`/chat/getAllByRO/${roId}`);
        const roChats = response.data;
        console.log(response.data);

        const formattedMessages = roChats.messages.map((message) => ({
          _id: message._id,
          text: message.content,
          createdAt: new Date(message.timestamp),
          user: {
            _id: message.sender._id,
            name: message.sender.name,
            avatar: 'https://placeimg.com/140/140/any',
          },
        }));

        setMessages(formattedMessages);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Trate o caso em que não há mensagens ainda
          console.log('Nenhuma mensagem encontrada');
          setMessages([]);
        } else {
          console.error('Erro ao obter as mensagens do chat:', error);
        }
      }
    }

    fetchChatMessages();
  }, [roId]);

  const onSend = useCallback(async (messages = []) => {
    try {
      const newMessage = messages[0].text;
      await api.post(`/chat/addMessage/${roId}`, {
        sender: id,
        content: newMessage,
      });

      const formattedMessage = {
        _id: messages[0]._id,
        text: newMessage,
        createdAt: new Date(),
        user: {
          _id: id,
          name: name,
          avatar: 'https://placeimg.com/140/140/any',
        },
      };

      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [formattedMessage])
      );
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
    }
  }, [roId, id, name]);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: id,
      }}
    />
  );
}
*/
