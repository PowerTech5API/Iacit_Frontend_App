import React, { Component } from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RO from './RO';

export default class RoPendente extends Component{
  x=[]
  render(){
    return(
        // ver como personalizar o status!!!!!!!;
        <>
            <RO x={this.x[0]} projeto='Dinsey+' descricao='Problema de autenticação' status='Pendente' />
            <RO x={this.x[1]} projeto='HBO' descricao='Aplicativo não abre' status='Pendente' />
            <RO x={this.x[2]} projeto='Netlfix' descricao='Sem categoria x' status='Pendente' />
        </>

        )
    } 
}