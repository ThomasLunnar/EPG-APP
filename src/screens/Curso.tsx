import { TouchableOpacity } from 'react-native';
import { Box, Heading, HStack, Icon, Image, Text, VStack, ScrollView, Checkbox, FlatList, Center, Input, View } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { useCurso } from '@hooks/useCurso'

import { HomeHeader } from '@components/HomeHeader';
import { Video } from "@components/Video";

import { MeuAcordeao } from '@components/Accordion';

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
      <View h='30%' bg='black'>
        <Video
          videoId="1r5KGA9-vBApdTOt_qQWROTkY0VTjI5AG"
        />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>


        <VStack mt={6} px={10}>

          <Heading color='white' flex={1} textAlign='center' mb={4}>
            {curso.nome}
          </Heading>

          <MeuAcordeao/>



          <Heading color='white'>Aula 1</Heading>
          <Text color='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

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
                  {item.titulo_modulo}
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
                        {item.titulo_aula}
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