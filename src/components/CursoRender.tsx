import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, Button, VStack, HStack, Heading } from "native-base";

//rotas
import { AppNavigatorRoutesProps } from '@routes/app.routes';

//card placeholder
import { TreinamentoCard } from "./TreinamentoCard";

export function CursoRender() {

    const [cursoCapas, setCursoCapas] = useState(['Trilha de Consultoria', 'Trilha de Consultori', 'Trilha de Consultora', 'Trilha de Consultore']);

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
                    <TreinamentoCard onPress={handleOpenTreinamentoDetails} />
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