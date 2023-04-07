import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

function Form1({formData, setFormData}) {
  return (
    <View style={styles.container2}>
      {/* órgão - nome empresa cliente */}
      <TextInput
        style={styles.inputView}
        placeholder="Orgão"
        value={formData.orgao}
        onChangeText={orgao => {
          setFormData({...formData, orgao});
        }}
      />
      {/* Nome - usuário */}
      <TextInput
        style={styles.inputView}
        placeholder="Nome"
        value={formData.nome}
        onChangeText={nome => {
          setFormData({...formData, nome});
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
