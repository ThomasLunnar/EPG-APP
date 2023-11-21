import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, Button, VStack, HStack, Heading } from "native-base";

//API
import { handleGetCursos } from '@services/connectDB';

//rotas
import { AppNavigatorRoutesProps } from '@routes/app.routes';

//card placeholder
import { TreinamentoCard } from "./TreinamentoCard";

async function getCursos() {
    let serverResposta = await handleGetCursos()
    console.log(serverResposta.data)
    return (serverResposta.data)
}

export function CursoRender() {

    const [cursoCapas, setCursoCapas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Substitua a linha abaixo pela chamada real da sua função assíncrona
            const resultado = await getCursos();
            setCursoCapas(resultado);
          } catch (erro) {
            console.error('Erro ao buscar cursos:', erro);
          }
        };
    
        fetchData();
      }, []);

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenTreinamentoDetails() {
        navigation.navigate('curso');
    }

    return (
        <VStack>
            <VStack px={8}>
                <HStack justifyContent="space-between" my={5}>
                    <Heading color="white" fontSize="xl" fontWeight={600}>
                        Trilha <Text fontWeight={800}>Estratégica</Text>
                    </Heading>

                    <Text color="white" fontSize="sm">
                        {cursoCapas.length}
                    </Text>
                </HStack>
            </VStack>

            <FlatList
                data={cursoCapas}
                background='blue.700'
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <TreinamentoCard onPress={handleOpenTreinamentoDetails} nome={item.nome}/>
                )}
                alwaysBounceHorizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                px={8}
                _contentContainerStyle={{
                    paddingRight: 8
                }}
            />
        </VStack>
    )
}