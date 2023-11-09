import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useTheme } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import userPhotoDefault from '@assets/userPhotoDefault.png'

import { useAuth } from '@hooks/useAuth'

const PHOTO_SIZE = 33;

export function Account() {

  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  const { setUser } = useAuth();

  function logOut(){
    setUser({
      convidado:false
    })
  }

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
                source={userPhotoDefault}
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
            placeholder='Nome'
            isDisabled
          />

          <Input 
            placeholder="E-mail"
            isDisabled
          />
        
          <Heading color="white" fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
            Alterar senha
          </Heading>

          <Input 
            placeholder="Senha antiga"
            secureTextEntry
            isDisabled
          />

          <Input 
            placeholder="Nova senha"
            secureTextEntry
            isDisabled
          />

          <Input 
            placeholder="Confirme a nova senha"
            secureTextEntry
            isDisabled
          />

          <Button title="Atualizar" mt={4} />

          <TouchableOpacity onPress={logOut}>
            <Text color="red.500" fontWeight="medium" fontSize="md" mt={16} mb={2}>
              Sair
            </Text>
          </TouchableOpacity>

        </Center>
      </ScrollView>
    </VStack>
  );
}