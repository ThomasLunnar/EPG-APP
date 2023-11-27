import React, { useState, useEffect } from 'react';
import { TouchableOpacity,Alert } from 'react-native';
import { Box, Heading, HStack, Icon, Image, Text, VStack, ScrollView, Checkbox, FlatList, Center, Input, View, Container } from 'native-base';

import { useNavigation, useRoute } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { useCurso } from '@hooks/useCurso'

import Collapsible from 'react-native-collapsible';
import ArrowRight from '@assets/arrow-right.svg';
import ArrowLeft from '@assets/arrow-left.svg';
import ArrowUp from '@assets/arrow-up.svg';
import ArrowDown from '@assets/arrow-down.svg';

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

  function proximaAula({ numAula, numModulo }) {
    if (curso.modulos[numModulo].aulas[numAula + 1]) {
      console.log('tem proxima')
      navigation.navigate('curso', {
        modulo: numModulo,
        aula: numAula + 1
      });
    } else if (curso.modulos[numModulo + 1]) {
      navigation.navigate('curso', {
        modulo: numModulo + 1,
        aula: 0
      });
    } else {
      console.log('Curso concluído')
      Alert.alert(
        'Curso concluído',
        `Você concluiu todas as aulas do curso ${curso.nome} disponíveis até esse momento.`,
        [
          {
            text: 'OK',
            onPress: () => console.log('Botão OK Pressionado'),
          },
        ],
        { cancelable: false }
      );
    }
  }

  function aulaAnterior({ numAula, numModulo }) {
    // console.log(Object.keys(curso.modulos[numModulo - 1].aulas).length)
    if (curso.modulos[numModulo].aulas[numAula - 1]) {
      console.log('Não há anterior')
      navigation.navigate('curso', {
        modulo: numModulo,
        aula: numAula - 1
      });
    } else if (curso.modulos[numModulo - 1]) {
      navigation.navigate('curso', {
        modulo: numModulo - 1,
        aula: Object.keys(curso.modulos[numModulo - 1].aulas).length - 1
      });
    } else {
      console.log('Algo inesperado aconteceu - CursoNavigation')
    }
  }

  const navigation = useNavigation<AppNavigatorRoutesProps>();

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
              <TouchableOpacity onPress={() => aulaAnterior({ numAula, numModulo })}>
                <ArrowLeft />
              </TouchableOpacity>
            </VStack>
            <VStack w='10%' justifyContent='center' alignItems='flex-end' >
              <TouchableOpacity onPress={() => proximaAula({ numAula, numModulo })}>
                <ArrowRight />
              </TouchableOpacity>
            </VStack>
          </HStack>

          <Heading color='white' fontSize='xl'>Aula 1</Heading>
          <Text color='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

          <TouchableOpacity onPress={toggleExpandModulo}>
            <HStack p={4} borderColor='white' borderWidth={1} borderRadius={100} marginTop={5}>
              <Heading w='90%' color='white' fontSize='lg'>
                Módulos
              </Heading>
              <Container justifyContent='center'>
                {moduloCollapsed ? <ArrowDown /> : <ArrowUp />}
              </Container>
            </HStack>

          </TouchableOpacity>
          <Collapsible collapsed={moduloCollapsed} align='bottom'>

            <FlatList
              data={curso.modulos}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({ item, index }) => (
                <VStack>
                  <TouchableOpacity onPress={() => toggleExpandAula(index)}>

                    <HStack p={4} borderColor='white' borderWidth={1} borderRadius={100} marginTop={5}>
                      <Text w='90%' color='white'>
                        {item.titulo_modulo}
                      </Text>
                      <Container justifyContent='center'>
                        {aulaCollapsed[index] ? <ArrowDown /> : <ArrowUp />}
                      </Container>
                    </HStack>
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