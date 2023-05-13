import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { Image, KeyboardAvoidingView, SectionList, StatusBar,
     StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView} from "react-native";
import { TextInput } from "react-native";

//import {Icon} from "react-native-vector-icons/dist/MaterialCommunityIcons";
import {messageList} from './Mensagens';
import groupBy from 'lodash/groupBy';
const {width} = Dimensions.get('window');
import moment from 'moment';


export default function Chat() {
    const [listMsg, setListMsg] = useState([]);
    const [msg, setMsg] = useState('');
    const screenWidth = Dimensions.get('window').width;
  
    useEffect(() => {
      const groupedList = Object.values(
        groupBy(messageList, function (n) {
          return n.createdAt.substr(0, 10);
        })
      );
  
      // Ordenar a lista de mensagens por data
      const sortedList = groupedList.sort((a, b) => {
        const dateA = new Date(a[0].createdAt);
        const dateB = new Date(b[0].createdAt);
        return dateA - dateB;
      });
  
      var data = []; // Vai receber as mensagens
  
      sortedList.forEach((dia) => {
        var section = {
            title: moment(dia[0].createdAt).format('DD:MM:yy'),
          data: [...dia],
        };
        data.push(section);
      });
  
      setListMsg(data);
    }, []);
  
     function renderMsg({ item }) {
      if (item.from === 1) {
        return (
          <View style={styles.ForMe}>
            <Text style={styles.msgTxt}>{item.message}</Text>
            <View><Text style={styles.hour}>{item.createdAt.substr(11, 5)}</Text></View>
          </View>
        );
      } else {
        return (
          <View style={styles.fromMe}>
            <Text style={styles.msgTxt}>{item.message}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', alignSelf: 'flex-end' }}>
              {<Text style={styles.hour}>{item.createdAt.substr(11, 5)}</Text>}
              {/*<Icon 
              name="check-all"
              size={18}
              style={{marginLeft: 5}}
        color={item.status === 2 ? '#007dff' : '#aaa'} />*/}
            </View>
          </View>
        );
      }
    }
  
    return (

      <SafeAreaView style={styles.container}>

    <StatusBar barStyle='light-content' />
        <View style={styles.header}>
          {/* <Icon name="chevron-left" size={36} color="red" /> */}
          <Image style={styles.avatar} source={{ uri: 'https://i.pravatar.cc/50?img=5' }} />
          <View>
            <Text style={styles.name}>RO ID: 123</Text>
            <Text style={styles.Status}>Visto por último hoje às 16:05</Text>
          </View>
        </View>

        <View style={styles.content}>
          <SectionList
            sections={listMsg}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderMsg}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.data}>
                <Text style={styles.title}>{title}</Text>
              </View>
            )}
          />
        </View>
      
        <View style={styles.footer}>
        <KeyboardAvoidingView behavior="padding">
        
        <TextInput 
        style={[styles.inputView, { width: screenWidth * 0.8 }]} 
        value={msg} 
        onChangeText={setMsg}
        placeholder="Digite aqui"></TextInput>
            <TouchableOpacity>
                {/* <Icon name="send" size={26} color={'#007dff'} /> */}
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
      </SafeAreaView>

    );
  }
  

const styles = StyleSheet.create({    
    container:{
        backgroundColor: 'red',
        flex:1,
        
    },

    footer: {
        borderTopColor: '#444',
        borderTopWidth: 1,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    inputView: {
        width: '80%',
        fontSize: 15,
        marginTop: 5,
        borderRadius: 40,
        height: 40,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 7,
        borderWidth: 1,


      },
    
    title:{
        fontSize: 13,
        color: '#fff', 
        textAlign: 'center',
    },
    avatar:{
        height: 44,
        width: 44,
        borderRadius: 22,
        marginHorizontal: 7,
    },

    header:{
        backgroundColor:'#1D2045',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#444',
        borderBottomWidth: 1,
        paddingVertical: 7,
        paddingHorizontal: 10,
        flex: 0
    },

    name:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    Status:{
        color: '#fff',
        fontSize: 13,
    },

    content:{
        backgroundColor: 'white',
        flex: 1,
    },

    data:{
        backgroundColor:'#808080',
        alignSelf: 'center',
        marginTop: 12,
        paddingVertical: 3,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    ForMe:{
        backgroundColor: '#5B4E46' + '3D',
        padding: 10,
        marginVertical: 10,
        maxWidth: width * 0.8,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginLeft: 20,
    },

    fromMe:{
        backgroundColor: 'rgba(78, 170, 209, 0.24)',
        padding: 10,
        marginVertical: 10,
        maxWidth: width * 0.8,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        marginLeft: 60,
    },

    msgTxt:{
        fontSize: 16,
        color: 'black',
    },

    hour:{
        fontSize: 11,
        color:'#808080',
        textAlign: 'right',
    },
  });


  