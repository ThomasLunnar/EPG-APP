import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Heading, HStack, Text, VStack, ScrollView } from 'native-base';

//componentes
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { CursoRender } from '@components/CursoRender';

//rotas
import { AppNavigatorRoutesProps } from '@routes/app.routes';

//momentaneo
import { UserPhoto } from '@components/UserPhoto';
import { TouchableOpacity } from 'react-native';

export function Home() {

  const [Perfis, setPerfis] = useState(['https://github.com/ThomasLunnar.png', 'https://github.com/felipeoteh.png', 'https://github.com/Bruno-Nuness.png', 'https://github.com/VictorLunnar.png']);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenPerfilDetails() {
    navigation.navigate('perfil');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <HomeHeader />

        {/* <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Group 
              name={item}
              isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          _contentContainerStyle={{
            px: 8,
          }}
          my={10}
          maxH={10}
          minH={10}
        /> */}

        <FlatList
          data={Perfis}
          background='blue.700'
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <UserPhoto
                size={16}
                mr={2}
                alt='cade a foto'
                source={{ uri: item }} />
            </TouchableOpacity>
          )}
          alwaysBounceHorizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          px={8}
          pr={4}
          _contentContainerStyle={{
            paddingRight: 8
          }}
        />

        <CursoRender/>

        <VStack px={8}>
          <HStack justifyContent="space-between" my={5}>
            <Heading color="white" fontSize="xl" fontWeight={400}>
              Meu <Text fontWeight={800}>Time</Text>
            </Heading>

            <Text color="white" fontSize="sm">
              {Perfis.length}
            </Text>
          </HStack>
        </VStack>

        <FlatList
          data={Perfis}
          background='blue.700'
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={handleOpenPerfilDetails}>
              <UserPhoto
                size={32}
                alt='cade a foto'
                mr={2}
                source={{ uri: item }} />
            </TouchableOpacity>
          )}
          alwaysBounceHorizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          px={8}
          _contentContainerStyle={{
            paddingRight: 8
          }}
        />


      </VStack>
    </ScrollView>
  );
}