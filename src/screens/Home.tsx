import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Heading, HStack, Text, VStack, ScrollView } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { TreinamentoCard } from '@components/TreinamentoCard';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function Home() {

  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro']);
  const [Treinamentos, setTreinamentos] = useState(['Trilha de Consultoria', 'Trilha de Consultori', 'Trilha de Consultora', 'Trilha de Consultora']);
  const [groupSelected, setGroupSelected] = useState('Costas');

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenTreinamentoDetails() {
    navigation.navigate('Treinamento');
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

        <VStack px={8}>
          <HStack justifyContent="space-between" mb={5}>
            <Heading color="gray.200" fontSize="xl" fontWeight={400}>
              Trilha <Text fontWeight={600}>Estratégica</Text>
            </Heading>

            <Text color="gray.200" fontSize="sm">
              {Treinamentos.length}
            </Text>
          </HStack>
        </VStack>

          <FlatList 
            data={Treinamentos}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TreinamentoCard onPress={handleOpenTreinamentoDetails} />
            )}
            alwaysBounceHorizontal
            showsVerticalScrollIndicator={false}
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