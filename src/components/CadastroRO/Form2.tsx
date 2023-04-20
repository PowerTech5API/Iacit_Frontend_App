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
            value={data.defeito.hardware.equipamento}
            onChangeText={equipamento => {
              setData({
                ...data,
                defeito: {
                  ...data.defeito,
                  hardware: {
                    ...data.defeito.hardware,
                    equipamento: equipamento,
                  },
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Posição"
            value={data.defeito.hardware.posicao}
            onChangeText={posicao => {
              setData({
                ...data,
                defeito: {
                  ...data.defeito,
                  hardware: {
                    ...data.defeito.hardware,
                    posicao: posicao,
                  },
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Part Number"
            value={data.defeito.hardware.partNumber}
            onChangeText={partNumber => {
              setData({
                ...data,
                defeito: {
                  ...data.defeito,
                  hardware: {
                    ...data.defeito.hardware,
                    partNumber: partNumber,
                  },
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Serial Number"
            value={data.defeito.hardware.serialNumber}
            onChangeText={serialNumber => {
              setData({
                ...data,
                defeito: {
                  ...data.defeito,
                  hardware: {
                    ...data.defeito.hardware,
                    serialNumber: serialNumber,
                  },
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
            value={data.defeito.software.versaoBaseDados}
            onChangeText={versaoBaseDados => {
              setData({
                ...data,
                defeito: {
                  ...data.defeito,
                  software: {
                    ...data.defeito.software,
                    versaoBaseDados: versaoBaseDados,
                  },
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Versão do Software"
            value={data.defeito.software.versaoSoftware}
            onChangeText={versaoSoftware => {
              setData({
                ...data,
                defeito: {
                  ...data.defeito,
                  software: {
                    ...data.defeito.software,
                    versaoSoftware: versaoSoftware,
                  },
                },
              });
            }}
          />

          <TextInput
            style={styles.inputView}
            placeholder="Anexo"
            value={data.defeito.software.anexo}
            onChangeText={anexo => {
              setData({
                ...data,
                defeito: {
                  ...data.defeito,
                  software: {
                    ...data.defeito.software,
                    anexo: anexo,
                  },
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
