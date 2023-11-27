import { Container } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    nome:string;
    capa:string;
  };

export function TestButton({...rest}){
    return(
        <TouchableOpacity {...rest}>
            <Container
            w={20}
            h={20}
            borderRadius='100'
            bg='green.500'
            >
            </Container>
        </TouchableOpacity>
    )
}