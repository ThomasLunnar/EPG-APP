import { TouchableOpacity } from 'react-native';
import { Box, Heading, HStack, Icon, Image, Text, VStack, ScrollView, Checkbox, FlatList, Center, Input } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { useCurso } from '@hooks/useCurso'

import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';
import { HomeHeader } from '@components/HomeHeader';

export function Curso() {

  const { curso } = useCurso()
  // console.log(curso)

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenAula() {
    navigation.navigate('aula');
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <VStack mt={6} px={10}>

          <Heading color='white' flex={1} textAlign='center' mb={4}>
            {curso.nome}
          </Heading>

          <Button
            variant='solid'
            onPress={handleOpenAula}
            title="Acessar aula"
          />

          <FlatList
            data={curso.modulos}
            scroll
            keyExtractor={item => item}

            renderItem={({ item }) => (
              <VStack>
                <Text w='full'
                  color='white'
                  p={4} borderColor='white'
                  borderWidth={1} borderRadius={100} marginTop={5}>
                  {item.nome}
                </Text>

                <FlatList
                  data={item.aulas}
                  keyExtractor={item => item}
                  width='full'
                  flex={1}
                  renderItem={({ item }) => (
                    <VStack px={4}>
                      <Text w='full'
                        color='white'
                        py={2} px={4} borderColor='white'
                        borderWidth={1} borderRadius={100} marginTop={5}>
                        {item.nome}
                      </Text>



                    </VStack>
                  )} />

              </VStack>
            )} />

            

        </VStack>
      </ScrollView>
    </VStack>
  );
}