import React from 'react';
import { Text } from 'react-native';


import Menu from '../../components/Menu'
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks } from './styles';
import ListItem from '../../components/ListItem';

const ShortLink = () => {
  return(
    <Container>
      <StatusBarPage
        barStyle="light-content"
        backgroundColor="#132742"
      />
      <Menu />
      <Title>Meus Links</Title>
      <ListLinks
        data={[ {id: 1, link: 'test.com'}, {id: 2, link: 'test.com'} ]}
        keyExtractor={ (item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default ShortLink;