import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export type CardStyleProps = "Green" | "Red";

type Props = {
  type: CardStyleProps;
}

interface SubTitleProps {
  bold?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGH};
`;

export const View = styled(SafeAreaView)`
  flex:1;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`
export const Header = styled.View<Props>`
  flex: 1;
  width: 100%;
  background-color : ${({ theme, type }) => type === 'Green' ? theme.COLORS.GREEN_LIGH : theme.COLORS.RED_LIGH} ;
  //background-color: ${({ theme }) => theme.COLORS.GREEN_LIGH};
  justify-content: start;
  align-items: center;
  padding-top:3%;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SubTitle = styled.Text<SubTitleProps>`
  ${({ theme, bold }) => css`
    color: ${theme.COLORS.GRAY_3};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    text-align: center;
  `}
`;

export const Stats = styled.View`
  flex:6;
  width:100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  align-items: center;
  padding-top: 15px;
  margin-bottom: -30px;
`

export const CardLarge = styled.View`
  width:85%;
  background-color : ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 10px;
  align-items: center;
  margin-top:15px;
`
export const ContainerCards = styled.View`
  flex-direction: row;
  width:85%;
  align-items: center;
  margin-top:15px;
  justify-content: space-between;
`
export const CardSmall = styled.View<Props>`
  width: 45%;
  background-color : ${({ theme, type }) => type === 'Green' ? theme.COLORS.GREEN_LIGH : theme.COLORS.RED_LIGH} ;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`


