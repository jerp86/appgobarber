import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Provider } from './index';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

interface HourTextProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f5ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export const Content = styled.ScrollView``;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px 16px;
`;

export const ProvidersListTitle = styled.Text``;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  background: ${(props) => (props.selected ? '#FF9000' : '#3E3B47')};
  flex-direction: row;
  align-items: center;

  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ProviderInfo = styled.View``;

export const ProviderName = styled.Text<ProviderNameProps>`
  color: ${(props) => (props.selected ? '#232129' : '#f4ede8')};
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;

  margin-left: 8px;
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  background: #ff9000;
  height: 46px;
  border-radius: 10px;
  margin: 0 24px;
  align-items: center;
  justify-content: center;
`;

export const OpenDatePickerButtonText = styled.Text`
  color: #232129;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  color: #999591;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin: 0 24px 12px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton)<HourProps>`
  background: ${(props) => (props.selected ? '#ff9000' : '#3e3b47')};
  padding: 12px;
  margin-right: 8px;
  border-radius: 10px;

  opacity: ${(props) => (props.available ? 1 : 0.3)};
`;

export const HourText = styled.Text<HourTextProps>`
  color: ${(props) => (props.selected ? '#232129' : '#f4ede8')};
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const CreateAppointmentButton = styled(RectButton)`
  background: #ff9000;
  height: 50px;
  border-radius: 10px;
  margin: 0 24px 24px;
  align-items: center;
  justify-content: center;
`;

export const CreateAppointmentButtonText = styled.Text`
  color: #232129;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
