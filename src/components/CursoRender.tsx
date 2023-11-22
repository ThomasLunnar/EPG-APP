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

export function CursoRender({ state, trilha }) {


    // let state = props.state
    // let trilha = props.trilha
    
    // let { state, trilha } = props

    // console.log(typeof state)
    // console.log("state")
    // console.log("trilha:", trilha)

    // return (<></>)
    const [cursoCapas, setCursoCapas] = useState(getCursos());


    const navigation = useNavigation<AppNavigatorRoutesProps>();



    function handleOpenTreinamentoDetails() {
        navigation.navigate('curso');
    }

    const [cursosFiltrados, setCursosFiltrados] = useState(state.filter(curso => curso.category == trilha));

    // Efeito para realizar o filtro ao montar o componente
    useEffect(() => {
        // Filtrar os cursos com a categoria "Estratégica"
        // const cursosFiltrados = state.filter(curso => curso.category == trilha);
        // console.log(cursosFiltrados)
        // console.log("cursosFiltrados")
        // // Atualizar o estado com os cursos filtrados
        // if(cursosFiltrados.length > 0){

        //     setCursosEstrategicos(cursosFiltrados);
        // }
    }, []);

    return (
        <VStack>
            <VStack px={8}>
                <HStack justifyContent="space-between" my={5}>
                    <Heading color="white" fontSize="xl" fontWeight={600}>
                        Trilha <Text fontWeight={800}>{trilha}</Text>
                    </Heading>

                    <Text color="white" fontSize="sm">
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