import { createDrawerNavigator } from "@react-navigation/drawer";

import UserMenu from '../User/UserMenu';
import RegistroOcorrenciaForm from '../CadastroRO/RegistroOcorrenciaForm';
import AcompanharRO from '../RO/RoTelas/AcompanharRO';
import RoAtendida from '../RO/RoTelas/RoAtendida';
import RoAtendimento from '../RO/RoTelas/RoAtendimento';
import RoPendente  from '../RO/RoTelas/RoPendente';
import DetalhesRoAtendida from '../RO/RoDetalhes/DetalhesRoAtendida';
import DetalhesRoPendente from '../RO/RoDetalhes/DetalhesRoPendente';
import DetalhesRoAtendimento from '../RO/RoDetalhes/DetalhesRoAtendimento';
import AcompanharROAdm from '../Admin/RO/RoTelas/AcompanharROAdm';
import RoPendenteUsers from '../Admin/RO/RoTelas/RoPendenteUsers';
import RoAtendimentoUsers from '../Admin/RO/RoTelas/RoAtendimentoUsers';
import RoAtendidaUsers from '../Admin/RO/RoTelas/RoAtendidaUsers';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="UserMenu" component={UserMenu} />
      <Drawer.Screen name="CadastroRO" component={RegistroOcorrenciaForm} />
      <Drawer.Screen name="AcompanharRO" component={AcompanharRO} />
      <Drawer.Screen name="RoAtendida" component={RoAtendida} />
      <Drawer.Screen name="RoAtendimento" component={RoAtendimento} />
      <Drawer.Screen name="RoPendente" component={RoPendente} />
      <Drawer.Screen name="DetalhesRoAtendimento" component={DetalhesRoAtendimento} />
      <Drawer.Screen name="DetalhesRoPendente" component={DetalhesRoPendente} />
      <Drawer.Screen name="DetalhesRoAtendida" component={DetalhesRoAtendida} />
      <Drawer.Screen name="AcompanharROAdm" component={AcompanharROAdm} />
      <Drawer.Screen name="RoPendenteUsers" component={RoPendenteUsers} />
      <Drawer.Screen name="RoAtendimentoUsers" component={RoAtendimentoUsers} />
      <Drawer.Screen name="RoAtendidaUsers" component={RoAtendidaUsers} />
    </Drawer.Navigator>
  );
}