import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import AccountSvg from '@assets/account.svg';
import CadernoSvg from '@assets/caderno.svg'

import { Home } from '@screens/Home';
import { Treinamento } from '@screens/Treinamento';
import { History } from '@screens/History';
import { Account } from '@screens/Account';
import { Perfil } from '@screens/Perfil';
import { MeuCaderno } from '@screens/MeuCaderno';
import { Aula } from '@screens/Aula';

type AppRoutes = {
  home: undefined;
  treinamento: undefined;
  account: undefined;
  history: undefined;
  perfil: undefined;
  meuCaderno: undefined;
  aula: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {

  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarActiveTintColor: colors.blue[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.blue[800],
        borderTopWidth: 0,
        height: Platform.OS === "android" ? 'auto' : 96,
        paddingBottom: sizes[8],
        paddingTop: sizes[8]
      }
    }}>
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color, }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      {/* Rota para histórico, não está sendo utilizado na aplicação */}

      {/* <Screen 
        name='history'
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      /> */}

      <Screen
        name='account'
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <AccountSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen
        name='meuCaderno'
        component={MeuCaderno}
        options={{
          tabBarIcon: ({ color }) => (
            <CadernoSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen
        name='treinamento'
        component={Treinamento}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name='aula'
        component={Aula}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="perfil"
        component={Perfil}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}