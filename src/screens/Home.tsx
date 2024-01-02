import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { FlatList, Heading, HStack, Text, VStack, ScrollView } from 'native-base';

//componentes
import { HomeHeader } from '@components/HomeHeader';
import { CursoRender } from '@components/CursoRender';

//rotas
import { AppNavigatorRoutesProps } from '@routes/app.routes';

//Conexão DB
import { handleGetCursos, handleGetCursosId  } from '@services/connectDB';

import{ SelelecionaCurso } from '@utils/SelecionaCurso'

//momentaneo
import { UserPhoto } from '@components/UserPhoto';
import { useCurso } from '@hooks/useCurso';

// async function getCursos() {
//   let serverResposta = await handleGetCursos()
//   // console.log(serverResposta.data)
//   return serverResposta.data
// }

export function Home() {

  const [Perfis, setPerfis] = useState(['https://github.com/ThomasLunnar.png', 'https://github.com/felipeoteh.png', 'https://github.com/Bruno-Nuness.png', 'https://github.com/VictorLunnar.png']);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenPerfilDetails() {
    navigation.navigate('perfil');
  }

  const [cursos, setCursos] = useState([]);

  const fetchCursos = async () => {
    try {
      const getCursos = await handleGetCursos()
      let dadosCursos = getCursos.data
      console.log(dadosCursos)
      console.log("dadosCursos")
      setCursos(dadosCursos);
    } catch (erro) {
      console.error('Erro ao buscar cursos:', erro);
    }
  };

  // const idTest = '382013278525587520'

  // try{
  //   SelelecionaCurso({CursoId : idTest})
  // } catch (erro) {
  //   console.error('Erro na seleção de curso', erro);
  // }

  useEffect(() => {
    fetchCursos();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} mb={10}>
        <HomeHeader />

        {/* <FlatList
          data={Perfis}
          background='blue.700'
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <UserPhoto
                size={16}
                mr={2}
                alt='cade a foto'
                source={{ uri: item }} />
            </TouchableOpacity>
          )}
          alwaysBounceHorizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          px={8}
          pr={4}
          _contentContainerStyle={{
            paddingRight: 8
          }}
        /> */}

        {cursos.length > 0 &&
          <CursoRender state={cursos} trilha="Estratégica" />
        }

        {/* <VStack px={8}>
          <HStack justifyContent="space-between" my={5}>
            <HStack>
              <Text color='white' fontSize="xl">
                Meu
              </Text>
              <Heading color='white' fontSize="xl" ml='1'  lineHeight={30}>
                Time
              </Heading>
            </HStack>
            <Text color="white" fontSize="sm" alignItems='baseline' lineHeight={30}>
              {Perfis.length}
            </Text>
          </HStack>
        </VStack> */}

        {/* <FlatList
          data={Perfis}
          background='blue.700'
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={handleOpenPerfilDetails}>
              <UserPhoto
                size={32}
                alt='cade a foto'
                mr={2}
                source={{ uri: item }} />
            </TouchableOpacity>
          )}
          alwaysBounceHorizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          px={8}
          _contentContainerStyle={{
            paddingRight: 8
          }}
        /> */}

        {cursos.length > 0 &&
          <CursoRender state={cursos} trilha="Profissional" />
        }


      </VStack>
    </ScrollView>
  );
}