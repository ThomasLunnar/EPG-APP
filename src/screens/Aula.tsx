import { HStack, ScrollView, Text, Heading, View, FlatList } from "native-base";
import { HomeHeader } from '@components/HomeHeader';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview';
import VideoPlayer from "@components/Player";

export function Aula() {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} bg='red400'>
            <VideoPlayer videoSource="https://drive.google.com/file/d/1r5KGA9-vBApdTOt_qQWROTkY0VTjI5AG/view"/>
        </ScrollView>
    )
}