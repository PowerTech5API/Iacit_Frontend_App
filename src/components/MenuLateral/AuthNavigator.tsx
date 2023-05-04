import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../User/Login';
import CadastroUsuario from '../User/CadastroUsuario';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
    </Stack.Navigator>
  );
}
