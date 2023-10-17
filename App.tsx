import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';

import { Routes } from '@routes/index';

import { THEME } from './src/theme';

import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold, Montserrat_800ExtraBold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}