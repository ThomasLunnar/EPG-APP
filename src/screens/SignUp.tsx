import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSvg from '@assets/logo-coroa.svg';


import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
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
            Crie sua conta
          </Heading>

          <Input 
            placeholder="Nome"
          />

          <Input 
            placeholder="E-mail" 
            keyboardType="email-address"
            autoCapitalize="none"

          />
          <Input 
            placeholder="Senha" 
            secureTextEntry
          />

          <Button title="Criar e acessar" />
        </Center>
        
        <Button 
          title="Voltar para o login" 
          variant="outline" 
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}