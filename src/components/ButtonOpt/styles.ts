import styled from "styled-components/native";
import { Pressable } from "react-native";

export type ButtonIconTypeStyleProps = "SIM" | "NAO";

type Props = {
  type?: ButtonIconTypeStyleProps;
  isPressed?: boolean
};

export const Container = styled(Pressable) <Props>`
  flex:1;
  padding: 0px 10px;
  height: 50px;
  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  ${({ theme, type, isPressed }) => {
    if (isPressed && type === "SIM") {
      return `
        background-color: ${theme.COLORS.GREEN_LIGH};
        border: 1px solid ${theme.COLORS.GREEN_DARK};
      `;
    }

    if (isPressed && type === "NAO") {
      return `
        background-color: ${theme.COLORS.RED_LIGH};
        border: 1px solid ${theme.COLORS.RED_DARK};
      `;
    }

    return '';
  }}
`;

export const Status = styled.View<Props>`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: ${({ theme, type }) => type === 'SIM' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Text = styled.Text<Props>`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;