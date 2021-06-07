import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Modal } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

import { Feather } from '@expo/vector-icons'
import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText } from './styles';


const Home = () => {
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleShortLink = () => {
    setModalVisible(true);
  }

  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={['#1ddbb5', '#132742']}
        style={{flex: 1, justifyContent: 'center' }}
      >
        <StatusBarPage
          barStyle="light-content"
          backgroundColor="#1ddbb5"
        />
        <Menu />
        <KeyboardAvoidingView 
          behavior={ Platform.OS === 'android' ? 'padding' : 'position' }
        >
          <ContainerLogo>
            <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
          </ContainerLogo>
          <ContainerContent>
            <Title>ShortLink</Title>
            <SubTitle>Cole seu link para encurtar.</SubTitle>
            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>
              <Input
                placeholder="Cole seu link aqui..."
                placeholderTextColor="#fff"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={text => setInput(text)}
              />
            </ContainerInput>
            <ButtonLink onPress={handleShortLink}>
              <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>
        <Modal visible={modalVisible} transparent animationType="slide" >
          <ModalLink onClose={() => setModalVisible(false)} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

export default Home;
