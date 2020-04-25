import React from 'react';
import { Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container, Logout } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Text style={{ color: '#f4ede8', fontSize: 45 }}>
        {`🎉🧔\nGoBarber\n💇‍♂️️💈️`}
      </Text>

      <Logout onPress={signOut}>
        <Text style={{ fontSize: 25 }}>Sair 🚪🚶</Text>
      </Logout>
    </Container>
  );
};

export default Dashboard;
