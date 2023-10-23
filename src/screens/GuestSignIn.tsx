import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from 'react'

import { Controller, useForm } from 'react-hook-form'

type FormDataProps = {
  GuestPassword: string;
}

export function GuestSignIn() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit } = useForm<FormDataProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGuestSignIn({GuestPassword}: FormDataProps) {
    console.log({GuestPassword})
    // console.log(guestPassword)
    // if (guestPassword == 'lunnar23') {
    //   console.log(true)
    // } else {
    //   console.log(false)
    // }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>

        <Center my={40}>

          <Text color="white" fontSize="xl">
            Seja Bem Vindo, Convidado
          </Text>
        </Center>

        <Center>
          <Heading color="white" fontSize="xl" mb={6} fontWeight={200}>
            Digite a<Text fontFamily="heading"> palavra-chave</Text> divulgada na Imersão <Text fontFamily="heading">Empresário Governante</Text>.
          </Heading>

          <Controller
            control={control}
            name='GuestPassword'
            rules= {{
              required:'Senha Incorreta ou Expirada'
            }}
            render={({field: { onChange, value } }) => (
              <Input
                placeholder="Palavra-chave"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleGuestSignIn)}
                returnKeyType="send"
              />
            )}  
          />

          <Button
            title="Acessar"
            onPress= {handleSubmit(handleGuestSignIn)}
          />
        </Center>

        <Center mt={24}>
          <Text color="white" fontSize="sm" mb={3} fontFamily="body">
            Use outro metodo de acesso
          </Text>

          <Button
            title="Voltar para tela de login"
            variant="outline"
            onPress={handleGoBack}
          />

        </Center>
      </VStack>
    </ScrollView>
  );
}