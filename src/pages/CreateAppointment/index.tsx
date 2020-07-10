import React, { useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
} from './styles';

interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const { goBack } = useNavigation();

  const { providerId } = route.params as RouteParams;

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const avatarFake = useCallback((): string => {
    const numberAvatar = Math.floor(Math.random() * 255);
    return `https://api.adorable.io/avatars/134/${numberAvatar}`;
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url ?? avatarFake() }} />
      </Header>
    </Container>
  );
};

export default CreateAppointment;
