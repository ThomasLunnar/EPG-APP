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
    // console.log(serverResposta.data)
    return (serverResposta.data)
}

type props = {
    state: any,
    trilha: ['Estratégica', 'Profissional']
}

export function CursoRender({ state, trilha }: props) {

    // return (<></>)
    const [cursoCapas, setCursoCapas] = useState(getCursos());

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenTreinamentoDetails() {
        navigation.navigate('curso');
    }

    const [cursosFiltrados, setCursosFiltrados] = useState(state.filter(curso => curso.category == trilha));

    return (
        <VStack>
            <VStack px={8}>
                <HStack justifyContent="space-between" my={5}>
                    <HStack>
                        <Text color='white' fontSize="xl">
                            Trilha
                        </Text>
                        <Heading color='white' fontSize="xl" ml='1' lineHeight={30}>
                            {trilha}
                        </Heading>
                    </HStack>
                    <Text color="white" fontSize="sm" alignItems='baseline' lineHeight={30}>
                        {cursosFiltrados.length}
                    </Text>
                </HStack>
            </VStack>

            <FlatList
                data={cursosFiltrados}
                background='blue.700'
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <TreinamentoCard onPress={handleOpenTreinamentoDetails} nome={item.nome} />
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