import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, VStack, View } from 'native-base';
import { WebView } from 'react-native-webview';

import { TestButton } from '@components/TestButton';

interface Video {
    videoUrl: string;
}

export const Video: React.FC<Video> = ({ videoUrl }) => {

    const [videoLoading, setVideoLoading] = useState(true);
    const [videoSrc, setVideoSrc] = useState('');

    return (
        <VStack
            flex={1}
            flexGrow={1}
            justifyContent='center'
            alignItems='center'
            bg='black'
            mt={14}
        >
            <WebView
                source={{ uri: videoUrl }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                allowsInlineMediaPlayback={true}
                width='100%'
                borderWidth={120}
                paddingRight={100}
                paddingLeft={100}
                onLoad={() => (setVideoLoading(false))}
            />
            <Text color='white'>{videoLoading ? 'não foi':'foi'}</Text>
            <TestButton onPress={() => {
            console.log(videoLoading)
          }} />
        </VStack>
    );
};
