import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, KeyboardAvoidingView, SectionList, StatusBar, StyleSheet, Text, View, Dimensions } from "react-native";

// import {Icon} from "react-native-vector-icons/dist/MaterialCommunityIcons";
import {messageList} from './Mensagens';
import groupBy from 'lodash/groupBy';
const {width} = Dimensions.get('window');


export default function Chat(){


    const [listMsg, setListMsg] = useState([]);
    const [msg, setMsg] = useState('')

    //groupBy transforma a lista em um objeto, e object.values esta trasnformando ele em array novamente. 
    useEffect(()=> {
        const groupedList = Object.values(
            groupBy(messageList, function (n) {
                return n.createdAt.substr(0, 10);    //agrupando por createdAt, ou seja, por data. Pegando até os 10 primeiros caracteres do campo data.
            }),
        );
        var data = [];  //vai receber as mensagens
        groupedList.map(dia=>{
            let section={
                // titile: format (new Date(dia[0].createdAt), 'PPP', {locale: pt}),
                data: [...dia],
            };
            data.push(section);
        });
        setListMsg(data);
    },[]);


    function renderMsg(item){ 
        if(item.from==1){
            return(
                <View style={styles.ForMe}>
                    <Text style={styles.msgTxt}>{item.message}</Text>
                    <View>
                        <Text style={styles.hour}>{item.createdAt.substr(11, 5)}</Text>
                    </View>
                </View>
            );
        }

        else{
            return(
                <View style={styles.fromMe}>
                    <Text style={styles.msgTxt}>{item.message}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'baseline', alignSelf:'flex-end'}}>
                        {/* <Text style={styles.hour}>{item.createdAt.substr(11, 5)}</Text> */}
                        {/* <Icon 
                        name="check-all"
                        size={18}
                        style={{marginLeft: 5}}
                        color={'item.status === 2?'#007dff' :'#aaa'} /> */}
                    </View>
                </View>
            );
        }
    }



    return(
        <SafeAreaView>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.header}>
                {/* <Icon name="chevron-left" size={36} color="red" /> */}
                <Image style={styles.avatar}
                    source={{uri: 'https://i.pravatar.cc/50?img=5'}}
                />
                <View>
                    <Text style={styles.name}>FULANO</Text>
                    <Text style={styles.Status}>Visto por último hoje as 16:05</Text>
                </View>
            </View>
            <View style={styles.content}>
                <SectionList 
                    sections={listMsg}
                    keyExtractor={item=>String(item.id)}
                    renderItem={(item)=>renderMsg(item)}
                    renderSectionHeader={({section: {title}})=>(
                        <View style={styles.titleContainer}> 
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        
                )}
                />
            </View>
            <View style={styles.content} />
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.footer} >
                    <View style={{flexDirection: 'row', alignItems:'center', marginRight:20}}>
                        <TextInput style={styles.input} value={msg} onChangeText={setMsg}></TextInput>
                        <TouchableOpacity>
                            {/* <Icon name="send" size={26} color={'#007dff'} /> */}
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({    
  
    container:{
        backgroundColor: '#313131',
        flex: 1,
    },

    footer: {
        borderTopColor: '#444',
        borderTopWidth: 1,
    },

    input:{
        height: 40,
        borderColor:'#444',
        backgroundColor: '#414141',
        borderWidth: 1,
        borderRadius: 40,
        marginHorizontal: 20,
        marginVertical: 7,
        paddingLeft: 12,
        flex: 1,
        fontSize: 14,
        color: '#1E90FF',
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
        backgroundColor: '#212121',
        flex: 1,
    },

    titleContainer:{
        backgroundColor:'#414141',
        alignSelf: 'center',
        marginTop: 12,
        paddingVertical: 3,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    ForMe:{
        backgroundColor: 'E0FFFF',
        padding: 10,
        marginVertical: 10,
        maxWidth: width * 0.8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        marginLeft: 20,
    },

    fromMe:{
        backgroundColor: '#87CEFA',
        padding: 10,
        marginVertical: 10,
        maxWidth: width * 0.8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        marginLeft: 20,
    },

    msgTxt:{
        fontSize: 16,
        color: 'red',
    },

    hour:{
        fontSize: 11,
        color:'blue',
        textAlign: 'right',
    },
  });

  