import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useTheme, HStack } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 32;

export function Perfil() {

    const [photoIsLoading, setPhotoIsLoading] = useState(false);

    return (
        <VStack flex={1}>
            <HomeHeader />

            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <HStack px={10}>
                    <UserPhoto
                        source={{ uri: 'https://github.com/thomaslunnar.png' }}
                        alt="Foto do usuário"
                        size={PHOTO_SIZE}
                    />
                    <VStack px={6} py={2}>
                        <Text color='white' fontSize="xl2" >
                            Thomas
                        </Text>
                        <Heading color='white' fontSize="xl2">
                            Kruchelski
                        </Heading>
                        <HStack alignItems='center' pr={2}>
                            <Heading color='white' fontSize="xl2">
                                1200
                            </Heading>
                            <Text color='white' fontSize="xl2" >
                                Pontos
                            </Text>
                        </HStack>
                    </VStack>
                </HStack>
                <Center px={10}>


                    <Input
                        bg="gray.600"
                        placeholder='Nome'
                    />

                    <Input
                        bg="gray.600"
                        placeholder="E-mail"
                        isDisabled
                    />

                    <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
                        Alterar senha
                    </Heading>

                    <Input
                        bg="gray.600"
                        placeholder="Senha antiga"
                        secureTextEntry
                    />

                    <Input
                        bg="gray.600"
                        placeholder="Nova senha"
                        secureTextEntry
                    />

                    <Input
                        bg="gray.600"
                        placeholder="Confirme a nova senha"
                        secureTextEntry
                    />

                    <Button title="Atualizar" mt={4} />
                </Center>
            </ScrollView>
        </VStack>
    )
}