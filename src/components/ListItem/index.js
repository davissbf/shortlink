import React from 'react';
import { View } from 'react-native';

import { ContainerButton, Item } from './styles';

import { Feather } from '@expo/vector-icons';

const ListItem = () => {
  return(
    <View>
      <ContainerButton activeOpacity={0.7} onPress={() => alert('MODAL')}>
        <Feather
          name="link"
          color="#fff"
          size={24}
        />
        <Item numberOfLines={1}>https://youtube.comyoutube.comyoutube.com</Item>
      </ContainerButton>
    </View>
  );
}

export default ListItem;