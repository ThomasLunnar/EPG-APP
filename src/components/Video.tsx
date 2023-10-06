import { Image } from "native-base"

import VideoPlaceholder from '@assets/placeholder/video.png'

export function Video(){
    return (
        <Image
            w="full"
            h={64}
            source={VideoPlaceholder}
            alt="Nome do exercício"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />
    )
}