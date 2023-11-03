import { HStack, ScrollView,Text, Heading } from "native-base";
import { HomeHeader } from '@components/HomeHeader';

export function MeuCaderno() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <HomeHeader />
            <HStack px={10} alignItems='center'>
                <Text color='white' fontSize="xl2" >
                    Meu
                </Text>
                <Heading color='white' fontSize="xl2">
                    Caderno
                </Heading>
            </HStack>

        </ScrollView>
    )
}