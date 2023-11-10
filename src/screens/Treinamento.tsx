import { TouchableOpacity } from 'react-native';
import { Box, Heading, HStack, Icon, Image, Text, VStack, ScrollView, Checkbox } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';
import { HomeHeader } from '@components/HomeHeader';
import { Video } from '@components/WebVideo';

export function Treinamento() {

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenAula() {
    navigation.navigate('aula');
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack>
      <HomeHeader />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <VStack p={8}>

          <HStack alignItems='center' pb={6}>
            <Heading color='white' fontSize="xl2" pr={2} fontWeight={200}>
              Trilha de
            </Heading>
            <Heading color='white' fontSize="xl2">
              Consultoria
            </Heading>
          </HStack>

          <Text color='white' py={4} fontSize='md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>

          <Button 
            variant='solid' 
            onPress={handleOpenAula} 
            title="Acessar aula" 
          />

          {/* <HStack alignItems='center' pt={4} pb={6}>
            <Heading color='white' fontSize="xl2" pr={2} fontWeight={200}>
              Atividades
            </Heading>

          </HStack>

          <VStack pb={4}>
            <HStack p={3} borderColor='white' borderWidth={1} borderRadius={5} alignItems='center'>
              <Text color='white' fontSize='lg' flex={1}>Lorem Ipsum</Text>
              <Checkbox value='teste' />
            </HStack>
          </VStack> */}

        </VStack>
      </ScrollView >
    </VStack >
  );
}