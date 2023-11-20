import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Text, VStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import LogoSvg from '@assets/logo-coroa.svg';
import AccountImg from '@assets/userPhotoDefault.png';

import { useAuth } from '@hooks/useAuth'

import { UserPhoto } from './UserPhoto';

export function HomeHeader() {

  const { user } = useAuth();

  return (
    <HStack bg="blue.700" pt={12}  px={8} alignItems="center">
      <UserPhoto 
        source={AccountImg}
        size={16}
        alt="Imagem do usuário"
        mr={4}
      />
      
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md">
          {user.nome}
        </Heading>
      </VStack>


      <TouchableOpacity>
        <LogoSvg 
          width={75}
        />
      </TouchableOpacity>
    </HStack>
  );
}