import { useNavigation } from "@react-navigation/native";
import {
  BackButton,
  BackIcon,
  Container,
  Title,
  HeaderStyleType,
} from "./styles";

type Props = {
  title?: string;
  type?: HeaderStyleType;
};

export default function Header({ title, type }: Props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("home");
  };

  return (
    <Container type={type}>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
}
