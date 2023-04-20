import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

function Form1({data, setData}) {
  return (
    <View style={styles.container2}>
      {/* órgão - nome empresa cliente */}
      <TextInput
        style={styles.inputView}
        placeholder="Orgão"
        value={data.orgao}
        onChangeText={orgao => {
          setData({...data, orgao});
        }}
      />
      {/* Nome - usuário */}
      <TextInput
        style={styles.inputView}
        placeholder="Nome do relator"
        value={data.nomeRelator}
        onChangeText={nomeRelator => {
          setData({...data, nomeRelator});
        }}
      />
      {/* Nome - responsável */}
      <TextInput
        style={styles.inputView}
        placeholder="Nome do responsável"
        value={data.nomeResponsavel}
        onChangeText={nomeResponsavel => {
          setData({...data, nomeResponsavel});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 0.6,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    fontSize: 15,
    width: 250,
    marginTop: 5,
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  data: {
    flex: 0.1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form1;
