import styled, { css } from "styled-components/native";

export type ConfirmStyletype = 'GOOD' | 'BAD';

type Props = {

  type: ConfirmStyletype
}

export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
  padding : 60px;
`
export const Title = styled.Text<Props>`
 ${({ theme, type }) => css`
  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${type === "GOOD" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
 `}
 margin-bottom : 10px;
 `

export const Text = styled.Text`
 ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_1};
 `}
 margin-bottom : 10px;
 text-align:center;
 
`

export const Img = styled.Image`
height: 288px;
width: 224px;

margin-bottom: 25px;

`

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`