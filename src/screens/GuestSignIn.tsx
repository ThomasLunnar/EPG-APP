import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function GuestSignIn() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
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
          <Heading color="white" fontSize="xl" mb={6}  fontWeight={200}>
            Digite a<Text fontFamily="heading"> palavra-chave</Text> divulgada na Imersão <Text fontFamily="heading">Empresário Governante</Text>.
          </Heading>

          <Input 
            placeholder="Palavra-chave" 
            secureTextEntry
          />

          <Button title="Acessar" />
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