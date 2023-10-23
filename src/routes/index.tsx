import { useContext } from 'react';
import { useTheme, Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useAuth } from '@hooks/useAuth';

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } = useTheme();
  const {user} = useAuth();

  console.log('Usuário Logado =>', user)

  let UserLogin = false

  const theme = DefaultTheme;
  theme.colors.background = colors.blue[700];

  return (
    <Box flex={1} bg="blue.700">
      <NavigationContainer theme={theme}>
        {UserLogin ? < AppRoutes /> : < AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}