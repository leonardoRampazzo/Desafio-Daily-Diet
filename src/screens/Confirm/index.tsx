import ButtonIcon from "@components/ButtonIcon";
import { Container, ConfirmStyletype, Title, Img, Text, Bold } from "./styles";
import IllustrationGood from "@assets/IllustrationGood.png";
import IllustrationBad from "@assets/IllustrationBad.png";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParam = {
  status: boolean;
};

export default function Confirm() {
  const navigation = useNavigation();

  const route = useRoute();

  const type = route.params as RouteParam;

  const handleGoBack = () => {
    navigation.navigate("home");
  };

  return (
    <Container>
      {type ? (
        <>
          <Title type={type ? "GOOD" : "BAD"}>Continue Assim!</Title>
          <Text>
            Voce continua <Bold>dentro da dieta</Bold>. Muito bem!
          </Text>
          <Img source={IllustrationGood}></Img>
        </>
      ) : (
        <>
          <Title type={type ? "GOOD" : "BAD"}>Que Pena!</Title>
          <Text>
            Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se
            esforçando e não desista!
          </Text>
          <Img source={IllustrationBad}></Img>
        </>
      )}
      <ButtonIcon text="Ir para a página Inicial" onPress={handleGoBack} />
    </Container>
  );
}
