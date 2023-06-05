import React, { useState, useEffect } from 'react';
import {  Bubble, GiftedChat, IMessage, InputToolbar, Send } from 'react-native-gifted-chat';
import api from '../../service/api';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../User/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment-timezone';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatHeader from './ChatHeader';
import { StyleSheet, View } from 'react-native';

interface ChatMessage {
  content?: string;
  _id?: string;
  senderName?: string;
  sender?: string;
  senderId?:string;
  createdAt?: Date;
}

interface Chat{
  _id: string;
  messages: ChatMessage[];
}

export function Chat() {
  const { id, name } = useAuth();
  const route = useRoute();
  const { chatId , roTitulo, isChatBlocked } = route.params;
  const [messages, setMessages] = useState<IMessage[]>([]);

  const renderInputToolbar = (props) => {
    if (isChatBlocked) {
      return null; // não carrega a caixa de entrada de mensagens se o chat estiver bloqueado
    }

    return <InputToolbar {...props} />;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // obtendo mensagens do backend
        const userToken = await AsyncStorage.getItem('userToken');
        const response = await api.get(`/chat/getById/${chatId}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        const chatData = response.data;
  
        // transformar mensagens recebidas num formato adequado para o GiftedChat
        const transformedMessages = chatData.messages.map((message: ChatMessage) => {
          let senderId = message.senderId;

          //console.log('NOME ',senderId)
  
          const createdAt = `${message.day} ${message.hour}`;
          const formattedDate = moment
            .tz(createdAt, 'DD/MM/YYYY HH:mm', 'America/Sao_Paulo')
            .toDate();
  
          return {
            _id: message._id,
            text: message.content,
            createdAt: formattedDate,
            user: {
              _id: senderId,
              name: message.senderName,
            },
          };
        });
  
        setMessages(transformedMessages.reverse());
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [chatId]);
  

  const onSend = async (newMessages = []) => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const messageContent = newMessages[0].text;
      const response = await api.post('/chat/messages', {
        chatId: chatId,
        senderId: id,
        content: messageContent,
      }, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      if (response.data._id) {
        const sentMessage: IMessage = {
          _id: response.data._id,
          text: messageContent,
          createdAt: new Date(),
          user: {
            _id: id,
            name: name,
          },
        };
        setMessages((previousMessages) => GiftedChat.append(previousMessages, [sentMessage].reverse()));
      } else {
        console.error('Falha ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

const renderBubble = (props:  any) => {
  const { currentMessage } = props;
    return (
    <Bubble
    {...props}
        wrapperStyle={{
          right: {
            backgroundColor: 'rgba(78, 170, 209, 0.24)',
            borderBottomRightRadius: 0 ,
            borderBottomLeftRadius: 15,
            borderTopRightRadius:  15,
            borderTopLeftRadius: 15,
          },
          left: {
            backgroundColor: '#5B4E46' + '2D' ,
            borderBottomRightRadius: 15 ,
            borderBottomLeftRadius: 15,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 15,
          },
        }}
        textStyle={{
          left: {
            color: 'black',
          },
          right: {
            color: 'black',
          },
        }}

      />
    );};

  const renderSend = (props: any) => {
    return (
      <Send {...props} containerStyle={{ justifyContent: 'center' }}>
        <Icon name="send" size={24} color="#1D2045" />
      </Send>
    );
  };

  return (
    <View style={styles.container}>
      <ChatHeader roTitulo={roTitulo} />
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: id,
        name: name,
      }}

      renderBubble={renderBubble}
      renderSend={renderSend}
      placeholder="Digite sua mensagem"
      renderInputToolbar={renderInputToolbar}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
