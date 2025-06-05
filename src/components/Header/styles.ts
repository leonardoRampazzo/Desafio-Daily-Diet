import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

export type HeaderStyleType = "GOOD" | "BAD";

type Props = {
  type?: HeaderStyleType;
}

export const Container = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 170px;
  padding: 20px;
  padding-top: 60px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};

  ${({ theme, type }) =>
    type === "GOOD" && `
    background-color: ${theme.COLORS.GREEN_LIGH}
    `
  } 

  ${({ theme, type }) =>
    type === "BAD" && `
    background-color: ${theme.COLORS.RED_LIGH}
    `
  }
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`
export const BackButton = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  flex:1;
  text-align: center;
`

export const BackIcon =
  styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_1,
  }))``;

