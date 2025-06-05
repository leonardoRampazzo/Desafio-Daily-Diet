import React, { useState } from "react";
import { PressableProps } from "react-native";
import { Container, Text, ButtonIconTypeStyleProps, Status } from "./styles";
import { IconProps } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type Props = PressableProps & {
  text: string;
  type?: ButtonIconTypeStyleProps;
  pressed?: boolean;
};

export default function ButtonOpt({
  text,
  type = "SIM",
  pressed,
  ...rest
}: Props) {
  //const [isPressed, setIsPressed] = useState(false);

  return (
    <Container type={type} {...rest} isPressed={pressed}>
      <Status type={type}></Status>
      <Text>{text}</Text>
    </Container>
  );
}
