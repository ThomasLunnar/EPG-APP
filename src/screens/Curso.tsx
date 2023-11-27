import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Heading, HStack, Icon, Image, Text, VStack, ScrollView, Checkbox, FlatList, Center, Input, View } from 'native-base';

import { useNavigation, useRoute } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { useCurso } from '@hooks/useCurso'

import Collapsible from 'react-native-collapsible';
import ArrowRight from '@assets/arrow-right.svg';
import ArrowLeft from '@assets/arrow-left.svg';

import { ButtonMenor } from '@components/ButtonMenor';
import { HomeHeader } from '@components/HomeHeader';
import { Video } from "@components/Video";

type RouteParams = {
  modulo: number;
  aula: number;
}

export function Curso() {

  const route = useRoute();
  const { curso } = useCurso()

  // pega parâmetros de navegação
  const numAula = route.params.aula;
  const numModulo = route.params.modulo;


  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenAula() {
    navigation.navigate('aula');
  }

  function handleGoBack() {
    navigation.goBack();
  }

  const [moduloCollapsed, setModuloCollapsado] = useState(false)

  const toggleExpandModulo = () => {
    setModuloCollapsado(!moduloCollapsed)
  }

  const [aulaCollapsed, setAulaCollapsado] = useState([])

  function toggleExpandAula(i) {
    const arrayModificador = [...aulaCollapsed]; // Cria uma cópia do array atual
    arrayModificador[i] = !arrayModificador[i]
    setAulaCollapsado(arrayModificador)
  }

  //UseEffect para transformar Collapsed de aulas de forma dinamica 
  useEffect(() => {
    if (curso.modulos && curso.modulos.length > 0) {
      const novoArrayDeBooleanos = Array(curso.modulos.length).fill(false);
      setAulaCollapsado(novoArrayDeBooleanos);
      console.log(novoArrayDeBooleanos)
    }
  }, []);

  console.log(curso.modulos[numModulo].aulas[numAula].video)

  return (
    <VStack flex={1}>
      <View h='30%' bg='black'>
        <Video
          videoUrl={curso.modulos[numModulo].aulas[numAula].video}
        />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>

        <VStack mt={6} px={10}>
          <HStack mb={4}>
            <VStack w='80%' >
              <Heading color='white' textAlign='center' >
                {curso.nome}
              </Heading>
              <HStack justifyContent='center'>
                <Text color='white' textAlign='center'>Modulo: {numModulo}</Text>
                <Text color='white' textAlign='center' ml={2}>Aula: {numAula}</Text>
              </HStack>
            </VStack>
            <VStack w='10%' justifyContent='center' alignItems='flex-end'>
              <TouchableOpacity>
                <ArrowLeft />
              </TouchableOpacity>
            </VStack>
            <VStack w='10%' justifyContent='center' alignItems='flex-end' >
              <TouchableOpacity>
                <ArrowRight />
              </TouchableOpacity>
            </VStack>
          </HStack>

          <Heading color='white' fontSize='xl'>Aula 1</Heading>
          <Text color='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

          <TouchableOpacity onPress={toggleExpandModulo}>
            <Heading w='full'
              color='white'
              p={4} borderColor='white'
              borderWidth={1} borderRadius={100} marginTop={5} fontSize='lg'>
              Módulos
            </Heading>
          </TouchableOpacity>
          <Collapsible collapsed={moduloCollapsed} align='bottom'>

            <FlatList
              data={curso.modulos}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({ item, index }) => (
                <VStack>
                  <TouchableOpacity onPress={() => toggleExpandAula(index)}>
                    <Text w='full'
                      color='white'
                      p={4} borderColor='white'
                      borderWidth={1} borderRadius={100} marginTop={5}>
                      {item.titulo_modulo}
                    </Text>
                  </TouchableOpacity>

                  <Collapsible collapsed={aulaCollapsed[index]}>
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
                  </Collapsible>

                </VStack>

              )} />
          </Collapsible>

        </VStack>
      </ScrollView>
    </VStack>
  );
}