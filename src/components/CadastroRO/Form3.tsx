import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';


function Form3({formData, setFormData}) {
  return (
    <View style={styles.container2}>
      <TextInput
        style={styles.inputView}
        placeholder="Título"
        value={formData.titulo}
        onChangeText={titulo => {
          setFormData({...formData, titulo});
        }}
      />
      <TextInput
        style={styles.inputViewBox}
        multiline={true}
        placeholder="Descrição"
        value={formData.descricao}
        onChangeText={descricao => {
          setFormData({...formData, descricao});
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
  inputViewBox: {
    fontSize: 15,
    width: 250,
    height: 150,
    marginTop: 5,
    borderRadius: 5,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    textAlignVertical: 'top',
  },
});

export default Form3;
