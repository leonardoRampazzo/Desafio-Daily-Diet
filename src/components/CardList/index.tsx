import { TouchableOpacityProps } from "react-native";

import { Container, Time, Title, Stat, ViewFlex } from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  title: string;
  status: boolean;
};

export function CardList({ time, title, status, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <ViewFlex>
        <Title>{title}</Title>
      </ViewFlex>
      <Stat Green={status} />
    </Container>
  );
}
