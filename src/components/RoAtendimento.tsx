import React, { Component } from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RO from './RO';

export default class RoAtendimento extends Component{
  x=[]
  render(){
    return(
        <>
            <RO x={this.x[0]} projeto='Dinsey+' descricao='Problema de autenticação' status='Atendimento' />
            <RO x={this.x[1]} projeto='HBO' descricao='Aplicativo não abre' status='Atendimento' />
            <RO x={this.x[2]} projeto='Netlfix' descricao='Sem categoria x' status='Atendimento' />
        </>

        )
    } 
}