import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Image, Text, VStack, Icon } from 'native-base';

import PlaceholderTreinamento from '@assets/placeholder/trilhas-de-consultoria.jpg';

import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  
};

export function TreinamentoCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack alignItems="center" rounded="md" mb={3}>
        <Image 
          source={PlaceholderTreinamento}
          alt="Imagem do exercício"
          w={48}
          h={72}

          rounded="md"
          mr={6}
          resizeMode="cover"
        />
      </HStack>
    </TouchableOpacity>
  );
}