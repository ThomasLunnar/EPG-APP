import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import LogoSvg from '@assets/logo-coroa.svg';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env';
import NewAuth from '@components/NewAuth';

WebBrowser.maybeCompleteAuthSession();

export function SignIn() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: IOS_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes:['profile','email']
  });

  function handleGoogleSignIn(){
    setIsAuthenticating (true);

    googleSignIn().then((response) => {
      if(response.type !== "success"){
        setIsAuthenticating(false);
      }
    })
  }

  useEffect(() => {
    if(response?.type === 'success'){
      if(response.authentication?.idToken){
        console.log('Token =>', response.authentication.idToken)
      }
    }
  },[response]);

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate('signUp');
  }
  function handleGuestAccount() {
    navigation.navigate('guestSignIn');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <VStack flex={1} px={10} pb={16}>
        {/* <Image 
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        /> */}

        <Center my={24}>
          <LogoSvg />

          
        </Center>

        <Center>
          <Heading color="white" fontSize="xl" mb={6} fontFamily="heading">
            Acesse a conta
          </Heading>

          {/* <Input 
            placeholder="E-mail" 
            keyboardType="email-address"
            autoCapitalize="none"

          />
          <Input 
            placeholder="Senha" 
            secureTextEntry
          /> */}

          <Button 
            title="Entrar com Conta Google" 
            onPress={handleGoogleSignIn}
            isLoading={isAuthenticating}
          />

          <NewAuth/>
        </Center>

        <Center mt={24}>
          <Text color="white" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button 
            title="Entrar como Convidado" 
            variant="outline"
            onPress={handleGuestAccount}
            mb={2}
          />
          <Button 
            title="Criar Conta" 
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}