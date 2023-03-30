import React, { Component } from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RO from './RO';

export default class RoAtendida extends Component{
  x=[]
  render(){
    return(
        <>
            <RO x={this.x[0]} projeto='Dinsey+' descricao='Problema de autenticação' status='Atendido' />
            <RO x={this.x[1]} projeto='HBO' descricao='Aplicativo não abre' status='Atendido' />
            <RO x={this.x[1]} projeto='Netlfix' descricao='Sem categoria x' status='Atendido' />
        </>

        )
    } 
}