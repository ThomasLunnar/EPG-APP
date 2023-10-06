import { TouchableOpacity } from 'react-native';
import { Box, Heading, HStack, Icon, Image, Text, VStack, ScrollView } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';
import { HomeHeader } from '@components/HomeHeader';
import { Video } from '@components/Video';

export function Treinamento() {

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack>
      <HomeHeader/>
      <ScrollView>
        <VStack p={8}>
          <Video/>

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
             
            </HStack>

            <Button 
              title="Marcar como realizado"
            />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}