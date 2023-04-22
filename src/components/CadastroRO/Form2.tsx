import Checkbox from 'expo-checkbox';
import React, {useContext} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FormContext from '../../contexts/formContext';

function Form2({data, setData}) {
  const {
    isHardwareSelected,
    isSoftwareSelected,
    handleHardwareCheckboxChange,
    handleSoftwareCheckboxChange,
  } = useContext(FormContext);

  return (
    <View style={styles.container2}>
      <Text>Defeito:</Text>
      <View style={styles.checkboxesContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isHardwareSelected}
          onValueChange={handleHardwareCheckboxChange}
        />
        <Text>Hardware</Text>
        <Checkbox
          style={styles.checkbox}
          value={isSoftwareSelected}
          onValueChange={handleSoftwareCheckboxChange}
        />
        <Text>Software</Text>
      </View>
      {isHardwareSelected && (
        <View>
          <TextInput
            style={styles.inputView}
            placeholder="Equipamento"
            value={data.hardware && data.hardware.equipamento}
            onChangeText={equipamento => {
              setData({
                ...data,
                hardware: {
                  ...data.hardware,
                  equipamento: equipamento,
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Posição"
            value={data.hardware && data.hardware.posicao}
            onChangeText={posicao => {
              setData({
                ...data,
                hardware: {
                  ...data.hardware,
                  posicao: posicao,
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Part Number"
            value={data.hardware && data.hardware.partnumber}
            onChangeText={partnumber => {
              setData({
                ...data,
                hardware: {
                  ...data.hardware,
                  partnumber: partnumber,
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder='Serial Number'
            value={data.hardware && data.hardware.serialNumber}
            onChangeText={serialNumber => {
              setData({
                ...data,
                hardware: {
                  ...data.hardware,
                  serialNumber: serialNumber,
                },
              });
            }}
          />
        </View>
      )}

      {isSoftwareSelected && (
        <View>
          <TextInput
            style={styles.inputView}
            placeholder="Versão da Base de Dados"
            value={data.software && data.software.versaoBD}
            onChangeText={versaoBD => {
              setData({
                ...data,
                software: {
                  ...data.software,
                  versaoBD: versaoBD,
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Versão do Software"
            value={data.software && data.software.versaoSoftware}
            onChangeText={versaoSoftware => {
              setData({
                ...data,
                software: {
                  ...data.software,
                  versaoSoftware: versaoSoftware,
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="LogsRO"
            value={data.software && data.software.LogsRO}
            onChangeText={LogsRO => {
              setData({
                ...data,
                software: {
                  ...data.software,
                  LogsRO: LogsRO,
                },
              });
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
  checkboxesContainer: {
    flexDirection: 'row',
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
