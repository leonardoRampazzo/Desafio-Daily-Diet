import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type?: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity) <Props>`
  padding: 0px 10px;
  height: 50px;
  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) => type == 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  

  ${({ theme, type }) =>
    type !== 'PRIMARY' && `
    border:1px solid ${theme.COLORS.GRAY_1}
  `
  } 
`;

export const Text = styled.Text<Props>`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
`;