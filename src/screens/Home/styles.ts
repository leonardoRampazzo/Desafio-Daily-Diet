import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from 'styled-components/native'

export type CardStyleProps = "Green" | "Red";

type Props = {
  type: CardStyleProps;
}

interface TextProps {
  size?: number;
  bold?: boolean;
  color?: string;
  marginBottom?: number;
}

export const Container = styled(SafeAreaView)`
  flex:1;
  background-color: #fafafa;
  text-align: center;
  padding: 15px;
`

export const CardPerc = styled.View<Props>`
  width: 100%;
  background-color : ${({ theme, type }) => type === 'Green' ? theme.COLORS.GREEN_LIGH : theme.COLORS.RED_LIGH} ;
  border-radius: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding:20px;
  margin-bottom: 30px;
`

export const Text = styled.Text<TextProps>`
  ${({ theme, size, bold, color, marginBottom }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${size || 14}px;
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    margin-bottom: ${marginBottom || 0}px;
` }
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  margin-bottom:30px;
`

export const Image = styled.Image`  
    width: 40px;
    height: 40x;
    border-radius: 40px;
    border: 1px;
    border-color : ${({ theme }) => theme.COLORS.GRAY_1};
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`


