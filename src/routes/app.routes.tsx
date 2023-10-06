import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import AccountSvg from '@assets/account.svg';

import { Home } from '@screens/Home';
import { Treinamento } from '@screens/Treinamento';
import { History } from '@screens/History';
import { Account } from '@screens/Account';

type AppRoutes = {
  home: undefined;
  Treinamento: undefined;
  profile: undefined;
  history: undefined;
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
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === "android" ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen 
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color,  }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

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
        name='Account'
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <AccountSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen 
        name='Treinamento'
        component={Treinamento}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}