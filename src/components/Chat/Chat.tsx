import React, { useEffect, useState } from 'react';
import { GiftedChat, IMessage, MessageText, Send, Bubble } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../service/api'; // Importe a configuração correta da sua API
import { useAuth } from '../User/AuthProvider';
import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

export function Chat() {
  const { id, name } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const route = useRoute();
  const { chatId } = route.params;

  const loadMessages = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const response = await api.get<Chat>(`/chat/getById/${chatId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      const chat = response.data;

      const giftedChatMessages: IMessage[] = chat.messages.map((message) => {
        return {
          _id: message._id,
          text: message.content,
          createdAt: message.createdAt,
          user: {
            _id: message.sender,
            name: message.senderName,
          },
        };
      });

      setMessages(giftedChatMessages.reverse());
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
        chatId: chatId,
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

  const renderMessageText = (props: any) => {
    return (
      <MessageText
        {...props}
        textStyle={{
          left: {
            color: '#000000',
          },
          right: {
            color: 'black',
          },
        }}
      />
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#5B4E46' + '3D',
          },
          right: {
            backgroundColor: 'rgba(78, 170, 209, 0.24)',
          },
        }}
        textStyle={{
          left: {
            color: 'white',
          },
          right: {
            color: 'black',
          },
        }}
      />
    );
  };

  const renderSend = (props: any) => {
    return (
      <Send {...props} containerStyle={{ justifyContent: 'center' }}>
        <Icon name="send" size={24} color="#1D2045" />
      </Send>
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={sendMessage}
        user={{
          _id: id,
          name: name,
        }}
        renderMessageText={renderMessageText}
        renderBubble={renderBubble}
        renderSend={renderSend}
        placeholder="Digite sua mensagem"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
