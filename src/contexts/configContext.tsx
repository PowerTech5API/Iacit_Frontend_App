import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import api from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../components/User/AuthProvider';
import { Text } from 'react-native-elements';

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const { id } = useAuth();
  const [aceitarTermos, setAceitarTermos] = useState();
  const [receberEmail, setReceberEmail] = useState();
  const [configLoaded, setConfigLoaded] = useState(false);

  useEffect(() => {
    const getConfig = async (userToken) => {
      try {
        const configResponse = await api.get(`/config/getByUserId/${id}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        return configResponse.data;
      } catch (error) {
        console.error('Erro ao buscar configurações do usuário:', error);
        throw error;
      }
    };

    const fetchConfig = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');

        if (userToken) {
          const configData = await getConfig(userToken);

          // ordenar o historico do usuario pela data/hora em ordem decrescente
          const sortedConfigurations = configData.sort((a, b) => {
            const dateA = new Date(a.day + ' ' + a.hour);
            const dateB = new Date(b.day + ' ' + b.hour);
            return dateB - dateA;
          });

          // valores mais recente para atualizar os estados iniciais
          const latestConfig = sortedConfigurations[0];
          setAceitarTermos(latestConfig.termsAccepted);
          setReceberEmail(latestConfig.receiveEmails);
          setConfigLoaded(true);
        } else {
          // se o usuário não está autenticado
          console.log('Usuário não autenticado');
          setConfigLoaded(true); //  configLoaded true mesmo para usuários não autenticados pra evitar que fique preso em um estado de carregamento infinito
        }
      } catch (error) {
        console.error('Erro ao buscar configurações do usuário:', error);
        setConfigLoaded(true); //  configLoaded true para lidar com erros de busca de configurações
      }
    };

    fetchConfig();
  }, [id]);

  const handleAceitarTermos = useCallback((value) => {
    setAceitarTermos(value);
  }, []);

  const handleReceberEmail = useCallback((value) => {
    setReceberEmail(value);
  }, []);

  const contextValue = useMemo(
    () => ({
      aceitarTermos,
      receberEmail,
      handleAceitarTermos,
      handleReceberEmail,
      configLoaded,
    }),
    [aceitarTermos, receberEmail, handleAceitarTermos, handleReceberEmail, configLoaded]
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {configLoaded ? (
        children
      ) : (
        <Text>Loading...</Text>
      )}
    </ConfigContext.Provider>
  );
};
