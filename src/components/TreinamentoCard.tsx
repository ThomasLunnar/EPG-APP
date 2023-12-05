import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Image, Text, VStack, Icon } from 'native-base';

import PlaceholderTreinamento from '@assets/placeholder/trilhas-de-consultoria.jpg';

import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  nome:string;
  capa:string;
};

export function TreinamentoCard({nome,capa, ...rest }: Props) {

  return (
    <TouchableOpacity {...rest}>
      <VStack alignItems="center" rounded="md">
        <Image 
          source= {{uri:capa}}
          alt="Capa treinamento"
          w={48}
          h={72}

          rounded="md"
          mr={6}
          resizeMode="cover"
        />
        <Text color='white'>{nome}</Text>
      </VStack>
    </TouchableOpacity>
  );
}