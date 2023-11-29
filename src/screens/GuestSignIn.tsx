import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { useAuth } from '@hooks/useAuth'

import { Controller, useForm } from 'react-hook-form'

type FormDataProps = {
  GuestPassword: string;
}

const GuestSignInSchema = yup.object({
  GuestPassword: yup.string().required('Informe a senha agora').oneOf(['lunnar23'],'senha incorreta')
  
})

export function GuestSignIn() {

  const { setUser } = useAuth();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(GuestSignInSchema)
  });

  // const [guestPassword, setGuestPassword] = useState();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGuestSignIn(guestPassword: any) {
    console.log(guestPassword)
    if (guestPassword.GuestPassword == "lunnar23") {
      console.log(true)
      setUser((prevState) => ({
        ...prevState,
        validado:true,
        email: 'convidado@lunnar.team',
        nome: 'Convidado'
      }))
    } else {
      console.log(false)
    }
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
            render={({field: { onChange, value } }) => (
              <Input
                placeholder="Palavra-chave"
                secureTextEntry
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleGuestSignIn)}
                returnKeyType="send"
                errorMessage={errors.GuestPassword?.message}
              />
            )}  
          />

          {/* <Input
            placeholder="Palavra-chave"
            secureTextEntry
            autoCapitalize='none'
            onChangeText={setGuestPassword}
            onSubmitEditing={handleGuestSignIn}
            returnKeyType="send"
          /> */}

          <Button
            title="Acessar"
            onPress={handleSubmit(handleGuestSignIn)}
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