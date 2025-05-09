import { SafeAreaView } from "react-native-safe-area-context";

import styled from 'styled-components/native'

//styled(SafeAreaView)`
//styled.View`
export const Container = styled(SafeAreaView)`
  flex:1;
  background-color: #fafafa;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  color:#1B1D1E;
  font-size: 26px;
`