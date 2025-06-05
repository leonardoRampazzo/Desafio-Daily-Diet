import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

type Props = {
  multiline?: boolean;
}

export const Container = styled.View <Props>`
  flex:1;
  min-height: ${({ multiline }) => multiline ? 192 : 85}px;
  max-height: ${({ multiline }) => multiline ? 192 : 85}px;
  margin-bottom: 15px;
`

export const InputCustom = styled(TextInput) <Props>`
  flex: 1 ;
  min-height: ${({ multiline }) => multiline ? 142 : 46}px;
  max-height: ${({ multiline }) => multiline ? 142 : 46}px;
  border-radius: 6px;
  padding: 16px;

  border-style: solid;
  border-width: 1px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-color: ${theme.COLORS.GRAY_5};
  `}
  
  
`;

export const Text = styled.Text`
${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  margin-bottom:5px;
`