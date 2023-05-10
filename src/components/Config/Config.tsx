import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { useAuth } from '../User/AuthProvider';

const Config: React.FC = () => {
  const { name, email } = useAuth();
  console.log(name)
  console.log(email)
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name:</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.title}>Email:</Text>
      <Text style={styles.text}>{email}</Text>
    </View>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingVertical: 50,
      paddingHorizontal: 20,
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: 15,
    },
    contentContainer: {
      flex: 0.8,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
      color: '#1C1F44',
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
      marginBottom: 20,
      padding:10,
    },
  });
  
export default Config;
