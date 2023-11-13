import { HStack, ScrollView, Text, Heading, View, FlatList } from "native-base";
import { HomeHeader } from '@components/HomeHeader';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview';
import VideoPlayer from "@components/Player";

export function Aula() {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} bg='red400'>
            <VideoPlayer videoSource="1r5KGA9-vBApdTOt_qQWROTkY0VTjI5AG" apiKey=""/>
            <View p={10} gap={2}>
                <Heading color='white'>Aula 1</Heading>
                <Text color='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
        </ScrollView>
    )
}