import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ChatHeader = ({ roTitulo }) => {
    const navigation = useNavigation();
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="chevron-left" size={36} color="#1D2045" />
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>{`RO ID: (${roTitulo})`}</Text>
          <Text style={styles.status}>{`Visto por último hoje às teste`}</Text>
        </View>
      </View>
    );
  };

  
  
  const styles = StyleSheet.create({
    header: {
      flex: 0.1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingBottom: 8,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    name: {
      marginLeft: 20,
      fontSize: 16,
      fontWeight: 'bold',
    },
    status: {
    marginLeft: 20,
      fontSize: 12,
      color: '#999',
    },
  });
  
  export default ChatHeader;