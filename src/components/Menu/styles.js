import styled from 'styled-components';
import { StatusBar, Platform } from 'react-native';

export const ButtonMenu = styled.TouchableOpacity`
  top: ${Platform.OS === 'ios' ? StatusBar.currentHeight + 60 + 'px' : 10 + 'px'};
  position: absolute;
  margin: 0 20px;
  justify-content: space-between;
`;