import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import LogoSvg from '@assets/logo-coroa.svg';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {

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

          <Button title="Entrar com Conta Google" />
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