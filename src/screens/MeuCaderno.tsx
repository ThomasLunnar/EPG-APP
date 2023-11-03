import { HStack, ScrollView, Text, Heading, View, FlatList } from "native-base";
import { HomeHeader } from '@components/HomeHeader';
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export function MeuCaderno() {

    const [anotacacoes, setanotacoes] = useState(['Marketing Magnético', 'Afazeres']);


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <HomeHeader />
            <HStack px={10} alignItems='center'>
                <Text color='white' fontSize="xl2" pr={2}>
                    Meu
                </Text>
                <Heading color='white' fontSize="xl2">
                    Caderno
                </Heading>
            </HStack>

            <FlatList
                py={4}
                px={10}
                zIndex={1}
                data={anotacacoes}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <TouchableOpacity >
                        <View w='full'>
                            <Text
                                color='white'
                                w='full'
                                alignItems='center'
                                justifyContent='center'
                                textAlign='center'
                                py={5}
                                borderBottomColor='white'
                                borderBottomWidth={1}
                                fontSize={14}
                            >
                                {item}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            

        </ScrollView>
    )
}