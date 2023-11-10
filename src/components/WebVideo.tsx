import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, View } from 'native-base';
import { WebView } from 'react-native-webview';

interface Video {
    videoId: string;
}

export const WebVideo: React.FC<Video> = ({ videoId }) => {
    const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

    return (
        <Container
            flex={1}
            justifyContent='center'
            alignItems='center'
        >
            <WebView
                source={{ uri: videoUrl }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                allowsInlineMediaPlayback={true}
                h={50}
                borderWidth={50}
                flex={1}
                
            />
        </Container>
    );
};
