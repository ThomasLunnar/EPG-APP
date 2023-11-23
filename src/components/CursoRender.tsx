import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, Button, VStack, HStack, Heading } from "native-base";

//API
import { handleGetCursos } from '@services/connectDB';

//utils
import { SelelecionaCurso } from '@utils/SelecionaCurso'

//rotas
import { AppNavigatorRoutesProps } from '@routes/app.routes';

//db
import { handleGetCursosId } from '@services/connectDB'

//context
import { useCurso } from '@hooks/useCurso'

//card placeholder
import { TreinamentoCard } from "./TreinamentoCard";


// async function getCursos() {
//     let serverResposta = await handleGetCursos()
//     // console.log(serverResposta.data)
//     return (serverResposta.data)
// }

type props = {
    state: any,
    trilha: ['Estratégica', 'Profissional']
}

async function handleOpenTreinamentoDetails({ CursoId }) {

    // const navigation = useNavigation<AppNavigatorRoutesProps>();
    // console.log(CursoId)
    // await SelelecionaCurso({ CursoId })

    // try {
    // } catch (erro) {
    //     console.error('Erro na seleção de curso', erro);
    // }

    //====================Abaixo código do SelecioCurso.ts=============================

    // const navigation = useNavigation<AppNavigatorRoutesProps>();

    // const { setCurso } = useCurso();
    // console.log('inicio SelecionaCurso')
    // try {
    //     const getCurso = await handleGetCursosId({CursoId})
    //     let dadosCurso = getCurso.data
    //     console.log(dadosCurso)
    //     console.log('dadosCurso')

    //     //Salvar resposta do Get Curso em uma variavel

    //     setCurso((prevState) => ({
    //         ...prevState,
    //         nome: dadosCurso.nome,
    //         descricao: "Curso criado para servir de exemplo na modelagem de dados",
    //     }))

    //     navigation.navigate('curso');

    //     // return dadosCurso
    // } catch (erro) {
    //     console.error('Erro ao buscar cursos:', erro);
    // }
}

export function CursoRender({ state, trilha }: props) {

    const { setCurso } = useCurso();

    const navigation = useNavigation<AppNavigatorRoutesProps>();

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
                    // <TreinamentoCard onPress={() => handleOpenTreinamentoDetails({ CursoId: item.id })} nome={item.nome} />
                    <TreinamentoCard 
                    nome={item.nome}
                    key={item.id}
                    capa={item.capa}
                    onPress={async() => {
                        console.log('inicio SelecionaCurso')
                        try {
                            const getCurso = await handleGetCursosId({CursoId: item.id})
                            let dadosCurso = getCurso.data
                            console.log(dadosCurso)
                            console.log('dadosCurso')
                    
                            //Salvar resposta do Get Curso em uma variavel
                    
                            setCurso((prevState) => ({
                                ...prevState,
                                nome: dadosCurso.nome,
                                descricao: dadosCurso.descricao,
                            }))
                    
                            navigation.navigate('curso');
                    
                            // return dadosCurso
                        } catch (erro) {
                            console.error('Erro ao buscar o curso ao pressionar:', erro);
                        }
                    }} 
                     />
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