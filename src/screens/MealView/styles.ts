import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

export type ContainerStyleProps = "GOOD" | "BAD";

type Props = {
  type?: ContainerStyleProps;
}


export const Container = styled.View<Props> `
  flex:1;

  ${({ theme, type }) =>
    type === "GOOD" && `
    background-color: ${theme.COLORS.GREEN_LIGH};
    `
  } 
  ${({ theme, type }) =>
    type === "BAD" && `
    background-color: ${theme.COLORS.RED_LIGH};
    `
  }
`
export const Content = styled.View`
  flex: 6;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 25px;
`

export const SpaceHorizontal = styled.View`
  flex:1;
`
export const Title = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
margin-bottom: 10px;
`;

export const Label = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
margin-bottom: 10px;
`;

export const DateAndTime = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
margin-bottom: 10px;
`;

export const ChipView = styled.View<Props>`
 flex-direction: row;
 align-items: center;
 width: 140px;
 height: 30px;
 border-radius: 20px;
 padding-left: 15px;
 background-color : ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Status = styled.View<Props>`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: ${({ theme, type }) => type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ChipText = styled.Text`
  margin-left: 10px;
  margin-top: 7px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 10px;
`

export const ButtonsView = styled.View`
  flex:1;
  justify-content : space-around;
  max-height: 120px;
`

export const Modal = styled.Modal``

export const ModalContainer = styled.View`
  flex:1;
  justify-content: center;
  align-items: center ;

`



export const ModalView = styled.View`
  align-items: center;
  margin: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
  padding: 35px;
  ${Platform.select({
  ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.25;
      shadow-radius: 4px;
    `,
  android: `
      elevation: 5;
    `,
})}
`;

export const Space = styled.View`
  width:20px;
`

export const ViewRow = styled.View`
  flex-direction: row;
`

export const ModalTitle = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
margin-bottom:25px;
text-align: center;
`