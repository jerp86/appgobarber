import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

interface IconProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #f79000;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)<IconProps>`
  margin-right: 16px;
  color: #666360;

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
    `}

  ${(props) =>
    (props.isFocused || props.isFilled) &&
    !props.isErrored &&
    css`
      color: #f79000;
    `}
`;
