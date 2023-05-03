import { createDrawerNavigator } from '@react-navigation/drawer';
import RegistroOcorrenciaForm from '../CadastroRO//RegistroOcorrenciaForm';

const Drawer = createDrawerNavigator();

function MenuLateral() {
  return (
        <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
        }}
      >
      <Drawer.Screen name="RegistroOcorrenciaForm" component={RegistroOcorrenciaForm} />
      </Drawer.Navigator>
  );
}

export default MenuLateral;
