import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, VStack, View } from 'native-base';
import { WebView } from 'react-native-webview';

interface Video {
    videoUrl: string;
}

export const Video: React.FC<Video> = ({ videoUrl }) => {

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
            />
        </VStack>
    );
};
