import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, Button, VStack, HStack, Heading } from "native-base";

//API
import { handleGetCursos } from '@services/connectDB';

//rotas
import { AppNavigatorRoutesProps } from '@routes/app.routes';

//card placeholder
import { TreinamentoCard } from "./TreinamentoCard";

export function CursoRender(state: any, trilha: string) {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenTreinamentoDetails() {
        navigation.navigate('curso');
    }

    const [cursosEstrategicos, setCursosEstrategicos] = useState([]);

    // Efeito para realizar o filtro ao montar o componente
    useEffect(() => {
        // Filtrar os cursos com a categoria "Estratégica"
        const cursosFiltrados = state.state.filter(curso => curso.category == 'Estratégica');

        // Atualizar o estado com os cursos filtrados
        setCursosEstrategicos(cursosFiltrados);
    }, []);

    console.log(cursosEstrategicos)

    return (
        <VStack>
            <VStack px={8}>
                <HStack justifyContent="space-between" my={5}>
                    <Heading color="white" fontSize="xl" fontWeight={600}>
                        Trilha <Text fontWeight={800}>Estratégica</Text>
                    </Heading>

                    <Text color="white" fontSize="sm">
                        {state.length}
                    </Text>
                </HStack>
            </VStack>

            <FlatList
                data={cursosEstrategicos}
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