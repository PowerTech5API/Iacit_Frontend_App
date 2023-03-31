import Checkbox from 'expo-checkbox';
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function Form2({formData, setFormData}) {
  const [isHardwareSelected, setIsHardwareSelected] = useState(false);
  const [isSoftwareSelected, setIsSoftwareSelected] = useState(false);

  return (
    <View style={styles.container2}>
      <Text>Defeito:</Text>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isHardwareSelected}
          onValueChange={() => setIsHardwareSelected(!isHardwareSelected)}
        />
        <Text>Hardware</Text>
        <Checkbox
          style={styles.checkbox}
          value={isSoftwareSelected}
          onValueChange={() => setIsSoftwareSelected(!isSoftwareSelected)}
        />
        <Text>Software</Text>
      </View>
      {isHardwareSelected && (
        <View>
          <TextInput
            style={styles.inputView}
            placeholder="Equipamento"
            value={formData.equipamento}
            onChangeText={equipamento => {
              setFormData({...formData, equipamento});
            }}
          />
          <TextInput
            style={styles.inputView}
            placeholder="Posição"
            value={formData.posicao}
            onChangeText={posicao => {
              setFormData({...formData, posicao});
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Part Number"
            value={formData.partNumber}
            onChangeText={partNumber => {
              setFormData({...formData, partNumber});
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Serial Number"
            value={formData.serialNumber}
            onChangeText={serialNumber => {
              setFormData({...formData, serialNumber});
            }}
          />
        </View>
      )}
      {isSoftwareSelected && (
        <View>
          <TextInput
            style={styles.inputView}
            placeholder="Versão da Base de Dados"
            value={formData.versaoBaseDados}
            onChangeText={versaoBaseDados => {
              setFormData({...formData, versaoBaseDados});
            }}
          />
          <TextInput
            style={styles.inputView}
            placeholder="Versão do Software"
            value={formData.versaoSoftware}
            onChangeText={versaoSoftware => {
              setFormData({...formData, versaoSoftware});
            }}
          />
          <TextInput
            style={styles.inputView}
            placeholder="Anexo"
            value={formData.anexo}
            onChangeText={anexo => {
              setFormData({...formData, anexo});
            }}
          />
        </View>
      )}
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

  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
});

export default Form2;

/*  as opções são controladas pelos estados isHardwareSelected e
isSoftwareSelected. Quando um CheckBox é selecionado, o estado
correspondente é atualizado. Os campos de entrada aparecem ou
desaparecem dependendo do valor desses estados.*/
