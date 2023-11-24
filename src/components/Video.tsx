import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, VStack, View } from 'native-base';
import { WebView } from 'react-native-webview';

interface Video {
    videoId: string;
}

export const Video: React.FC<Video> = ({ videoId }) => {
    const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

    return (
        <VStack
            flex={1}
            flexGrow={1}
            justifyContent='center'
            alignItems='center'
            bg='black'
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
            />
        </VStack>
    );
};
