import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useTheme } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';


const PHOTO_SIZE = 33;

export function Account() {

  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Conta' />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
              <Skeleton 
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
              />
            :
              <UserPhoto 
                source={{ uri: 'https://github.com/thomaslunnar.png' }}
                alt="Foto do usuário"
                size={PHOTO_SIZE}
              />
          }
          
          <TouchableOpacity>
            <Text color="blue.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input 
            bg="blue.800" 
            placeholder='Nome' 
          />

          <Input 
            bg="blue.800" 
            placeholder="E-mail"
            isDisabled
          />
        
          <Heading color="white" fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
            Alterar senha
          </Heading>

          <Input 
            bg="blue.800"
            placeholder="Senha antiga"
            secureTextEntry
          />

          <Input 
            bg="blue.800"
            placeholder="Nova senha"
            secureTextEntry
          />

          <Input 
            bg="blue.800"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}