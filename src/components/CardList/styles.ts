import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  Green?: boolean
}

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:100%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  height: 50px;
  margin-top:3px;
  margin-bottom:3px;
  border-radius: 5px;
  padding: 10px 15px;
`

export const ViewFlex = styled.View`
  flex: 1;
  flex-direction: row;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-left-style: solid;
  margin: 0px 15px;
  padding: 0px 10px;
`

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR}px;
  `}
  
`
export const Stat = styled.View<Props>`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${({ theme, Green }) => Green ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`