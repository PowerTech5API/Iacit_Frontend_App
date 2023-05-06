import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Chat() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat</Text>
      </View>

      {/* messages */}
      <View style={styles.messages}>
        {/* message bubble */}
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>Teste teste teste</Text>
        </View>

        {/* message bubble */}
        <View style={[styles.messageBubble, styles.messageBubbleRight]}>
          <Text style={[styles.messageText, styles.messageTextRight]}>Teste teste teste</Text>
        </View>
      </View>

      {/* input */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Digite uma mensagem..." />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>

    </>
  );
}

const styles = StyleSheet.create({

  container2: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    paddingTop: '10%',
  },
  mid1Text: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1D2045',
    textAlign: 'center',
    fontFamily: 'Inter',
  },

  mid1: {
    width: '42.5%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    elevation: 8,
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  headerTitle: {
    fontSize: 25,
    color: '#1C1F44',
    fontWeight: 'bold',
  },
  messages: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    backgroundColor: '#1E457E',
    borderRadius: 5,
    padding: 10,
    maxWidth: '80%',
    marginBottom: 10,
  },
  messageBubbleRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#dbdbdb',
  },
  messageText: {
    color: '#ffffff',
    fontSize: 16,
  },
  messageTextRight: {
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  sendButton: {
    backgroundColor: '#1E457E',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});