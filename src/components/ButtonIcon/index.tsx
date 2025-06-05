import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Text, ButtonIconTypeStyleProps } from "./styles";
import { IconProps } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  Icon?: React.ElementType<IconProps>;
  text: string;
  type?: ButtonIconTypeStyleProps;
};

export default function ButtonIcon({
  Icon,
  text,
  type = "PRIMARY",
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container type={type} {...rest}>
      {Icon && (
        <Icon
          color={type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1}
          size={20}
        />
      )}

      <Text type={type}>{text}</Text>
    </Container>
  );
}
