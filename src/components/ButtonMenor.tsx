import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';
import { Loading } from './Loading';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
  isLoading?: boolean;
}

export function ButtonMenor({ title, variant = 'solid', isLoading = false, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="50%"
      h={10}
      bg={variant === 'outline' ? 'transparent' : 'blue.500'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="blue.500"
      rounded="sm"
      disabled={isLoading}
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'blue.600'  
      }}
      {...rest}
    >
      {isLoading
        ? <Loading/>
        : <Text 
        color={variant === 'outline' ? 'blue.500' : 'white'}
        fontFamily="heading"
        fontSize="xs"
        >
          {title}
        </Text>
      }
      
    </ButtonNativeBase>
  );
}