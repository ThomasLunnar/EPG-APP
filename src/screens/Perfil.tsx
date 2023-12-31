import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, View, ScrollView, VStack, Skeleton, Text, Heading, useTheme, HStack, FlatList, Checkbox } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 32;

export function Perfil() {

    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [etapas, setEtapas] = useState(['1', '2', '3', '4', '5','6','7','8','9','10','11','12']);

    const tarefasPDI = [
        { text: 'Tarefa 1', id: 1 },
        { text: 'Tarefa 2', id: 2 },
        { text: 'Tarefa 3', id: 3 }
    ]

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
                    <VStack px={6} py={2} justifyContent='space-between'>
                        <VStack>
                            <Text color='white' fontSize="xl2" >
                                Thomas
                            </Text>
                            <Heading color='white' fontSize="xl2">
                                Kruchelski
                            </Heading>
                        </VStack>
                        <HStack alignItems='center' pr={2}>
                            <Heading color='white' fontSize="xl2" pr={2}>
                                1200
                            </Heading>
                            <Text color='white' fontSize="xl2" >
                                Pontos
                            </Text>
                        </HStack>
                    </VStack>
                </HStack>

                <Text color='white' py={4} fontSize='md' px={10} lineHeight={20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id sapien mauris. Nullam a fermentum elit, nec tincidunt ipsum. Quisque sem libero,
                    varius ut maximus ut, tincidunt non neque.
                </Text>

                <HStack alignItems='center' justifyContent='space-between' px={10} py={2} w='100%'>
                    <HStack alignItems='center'>
                        <Heading color='white' fontSize="xl2" pr={2} fontWeight={200}>
                            Plano de
                        </Heading>
                        <Heading color='white' fontSize="xl2">
                            Carreira
                        </Heading>
                    </HStack>
                    <Text color="white" fontSize="sm">
                        {etapas.length}
                    </Text>
                </HStack>

                <View py={4}>
                    <FlatList
                        zIndex={1}
                        data={etapas}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <Text 
                                    color='white'
                                    bg='green.200'
                                    textAlign='center'
                                    w={12}
                                    h={12}
                                    mr={10}
                                    rounded='full'
                                >
                                    {item}
                                </Text>
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
                    />
                    <View bg='blue.500' w='full' h={1} position='absolute' top='80%'/>
                </View>


                <HStack alignItems='center' px={10} py={4}>
                    <Heading color='white' fontSize="xl2" pr={2} fontWeight={200}>
                        PDI
                    </Heading>

                </HStack>

                
                <VStack px={10} pb={4}>
                    <HStack p={3} borderColor='white' borderWidth={1} borderRadius={5} alignItems='center'>
                        <Text color='white' fontSize='lg' flex={1}>Lorem Ipsum</Text>
                        <Checkbox value='teste' />
                    </HStack>
                </VStack>
                <VStack px={10} pb={4}>
                    <HStack p={3} borderColor='white' borderWidth={1} borderRadius={5} alignItems='center'>
                        <Text color='white' fontSize='lg' flex={1}>Lorem Ipsum</Text>
                        <Checkbox value='teste' />
                    </HStack>
                </VStack>
                <VStack px={10} pb={4}>
                    <HStack p={3} borderColor='white' borderWidth={1} borderRadius={5} alignItems='center'>
                        <Text color='white' fontSize='lg' flex={1}>Lorem Ipsum</Text>
                        <Checkbox value='teste' />
                    </HStack>
                </VStack>
                <VStack px={10} pb={4}>
                    <HStack p={3} borderColor='white' borderWidth={1} borderRadius={5} alignItems='center'>
                        <Text color='white' fontSize='lg' flex={1}>Lorem Ipsum</Text>
                        <Checkbox value='teste' />
                    </HStack>
                </VStack>
                <VStack px={10} pb={4}>
                    <HStack p={3} borderColor='white' borderWidth={1} borderRadius={5} alignItems='center'>
                        <Text color='white' fontSize='lg' flex={1}>Lorem Ipsum</Text>
                        <Checkbox value='teste' />
                    </HStack>
                </VStack>


            </ScrollView>
        </VStack>
    )
}