import styled, { css } from 'styled-components/native';


export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  
`
export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Content = styled.View`
  flex: 6;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
  padding: 25px;
`

export const ViewRow = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`

export const Space = styled.View`
  width:20px;
`
export const SpaceHorizontal = styled.View`
  flex:1;
`
export const Text = styled.Text`

font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
margin-bottom: 10px;
`;