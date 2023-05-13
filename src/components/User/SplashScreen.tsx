import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import api from '../../service/api';
import { handleRedirect } from './Login';
import Animated, { useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {whiteLogo} from '../../imgs/Images'

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeOpacity = useSharedValue(1);

  useEffect(() => {
    const checkToken = async () => {
      const userToken = await AsyncStorage.getItem('userToken');

      if (userToken) {
               // O usuário está logado, verificar se é admin
               const adminResponse = await api.get('user/admin', {
                headers: { Authorization: `Bearer ${userToken}` },
              });
      
              if (adminResponse.data.isAdmin) {
                handleRedirect(true, navigation);
              } else {
                handleRedirect(false, navigation);
              }
      } else {
        // O usuário não está logado, redirecionar para a tela de login
        navigation.navigate('Login');
      }
    };

    checkToken();
   // Iniciar a transição de fade
    fadeOpacity.value = withTiming(0, { duration: 1000 });
  }, []);

  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, fadeStyle]}>
        <Image source={whiteLogo} />
      </Animated.View>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C1F44',
  },
  logoContainer: {
    marginBottom: 20,
  },
});

export default SplashScreen;