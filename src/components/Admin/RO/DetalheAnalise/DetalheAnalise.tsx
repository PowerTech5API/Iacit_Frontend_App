import Checkbox from 'expo-checkbox';
import React, {useContext} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FormContext from '../../../../contexts/formContext';

function Form({data,setData}){
    const{
        isCriticoSelected,
        isAltoSelected,
        isBaixoSelected,
        handleDefeitoCheckboxChange,
        handleSoftwareCheckboxChange,
        isMelExistSelected,
        isMelNaoExistSelected,
        handleMelhoriaCheckboxChange,
        isInvestigacaoSelected,
        isCausaExtSelected,
        handleInvestigacaoCheckboxChange,
        handleCausaExtCheckboxChange
    } = useContext(FormContext);

    return (
        <View style={styles.container2}>
            <Text>Análise dos registros</Text>
            <Text>Data e hora de recebimento:</Text>
            <View style={styles.checkboxesContainer}>
                <Text>Classificação</Text>
                <Text>Defeito:</Text>
                <Checkbox
                    style={styles.checkbox}
                    value={isCriticoSelected}
                    onValueChange={handleDefeitoCheckboxChange}
                    />
                <Text>Crítico - Categoria 1</Text>
                <Checkbox
                    style={styles.checkbox}
                    value={isAltoSelected}
                    onValueChange={handleSoftwareCheckboxChange}
                    />
                <Text>Alto - Categoria 2</Text>
                <Checkbox
                    style={styles.checkbox}
                    value={isBaixoSelected}
                    onValueChange={handleDefeitoCheckboxChange}
                    />
                <Text>Baixo - Categoria 3</Text>
                <Text>Melhoria:</Text>
                <Checkbox
                    style={styles.checkbox}
                    value={isMelExistSelected}
                    onValueChange={handleMelhoriaCheckboxChange}
                    />
                <Text>Funcionaliodade existente</Text>
                <Checkbox
                    style={styles.checkbox}
                    value={isMelNaoExistSelected}
                    onValueChange={handleMelhoriaCheckboxChange}
                    />
                <Text>Funcionaliodade não existente</Text>
                <Text>Outros:</Text>
                <Checkbox
                    style={styles.checkbox}
                    value={isInvestigacaoSelected}
                    onValueChange={handleInvestigacaoCheckboxChange}
                    />
                <Text>Investigação</Text>
                <Checkbox
                    style={styles.checkbox}
                    value={isCausaExtSelected}
                    onValueChange={handleCausaExtCheckboxChange}
                    />
                <Text>Causa Externa</Text>
                <Text>Justificativa das ações tomadas</Text>
                <TextInput
                    style={styles.inputViewBox}
                    multiline={true}
                    placeholder="Descrição"
                    value={data.descricao}
                    onChangeText={descricao => {
                    setData({...data, descricao});
                    }}
                />
            </View>
        </View>
    )
}