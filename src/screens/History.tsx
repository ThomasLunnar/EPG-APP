import { useState } from 'react';
import { Heading, VStack, SectionList, Text } from 'native-base';

import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';

export function History() {
  const [Treinamentos, setTreinamentos] = useState([
    {
      title: '26.08.22',
      data: ["", ""]
    }
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico' />

      <SectionList 
        sections={Treinamentos}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={Treinamentos.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />

    </VStack>
  );
}