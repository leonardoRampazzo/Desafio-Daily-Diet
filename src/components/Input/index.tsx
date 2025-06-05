import { TextInput, TextInputProps } from "react-native";

import { Container, Text, InputCustom } from "./styles";

import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  name: string;
  multiline?: boolean;
};

export function Input({ multiline = false, name, inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container multiline={multiline}>
      <Text>{name}</Text>
      <InputCustom
        multiline={multiline}
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_2}
        {...rest}
      />
    </Container>
  );
}
