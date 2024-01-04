import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Image, Text, VStack, Icon } from 'native-base';

import { Entypo } from '@expo/vector-icons';

import { useState } from 'react';

import cardPlaceholder from '@assets/placeholder/cardPlaceholder.png';

type Props = TouchableOpacityProps & {
  nome: string;
  capa: string;
};

export function TreinamentoCard({ nome, capa, ...rest }: Props) {

  const [imageError, setImageError] = useState(false);

  return (
    <TouchableOpacity {...rest}>
      <VStack alignItems="center" rounded="md">
      {
        imageError ? 
        <Image
          source={cardPlaceholder }
          alt='Capa do curso'
          w={48}
          h={72}
          onError={()=> {setImageError(true)} }
          accessibilityLabel="Descrição da imagem para acessibilidade"

          rounded="md"
          mr={6}
          resizeMode="cover"
        /> :   <Image
        source={{ uri: capa } }
        alt='Capa do curso'
        w={48}
        h={72}
        onError={()=> {setImageError(true)} }
        accessibilityLabel="Descrição da imagem para acessibilidade"

        rounded="md"
        mr={6}
        resizeMode="cover"
      />
      }

        <Text color='white'>{nome}</Text>
      </VStack>
    </TouchableOpacity>
  );
}