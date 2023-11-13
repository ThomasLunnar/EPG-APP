import { HStack, ScrollView, Text, Heading, View, FlatList } from "native-base";
import { HomeHeader } from '@components/HomeHeader';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview';
import { Video } from "@components/Video";

export function Aula() {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} bg='red400'>
            <Video videoId='1r5KGA9-vBApdTOt_qQWROTkY0VTjI5AG'/>
        </ScrollView>
    )
}