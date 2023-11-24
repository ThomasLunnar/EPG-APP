import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Heading, HStack, Icon, Image, Text, VStack, ScrollView, Checkbox, FlatList, Center, Input, View } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { useCurso } from '@hooks/useCurso'

import { HomeHeader } from '@components/HomeHeader';
import { Video } from "@components/Video";

import Collapsible from 'react-native-collapsible';
import { ButtonMenor} from '@components/ButtonMenor';

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

  return (
    <VStack flex={1}>
      <View h='30%' bg='black'>
        <Video
          videoId="1r5KGA9-vBApdTOt_qQWROTkY0VTjI5AG"
        />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>


        <VStack mt={6} px={10}>

          <Heading color='white' flex={1} textAlign='center' mb={4} >
            {curso.nome}
          </Heading>

          {/* <TouchableOpacity onPress={toggleExpand}>
            <Text color='white'>Collapse</Text>
          </TouchableOpacity>

          <Collapsible collapsed={collapsed}>
            <Text color='white'>Serei collapssado D:(</Text>
          </Collapsible> */}

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

            <HStack gap={2}>
              <ButtonMenor title='Aula anterior' />
              <ButtonMenor title='Próxima aula >' />
            </HStack>

        </VStack>
      </ScrollView>
    </VStack>
  );
}