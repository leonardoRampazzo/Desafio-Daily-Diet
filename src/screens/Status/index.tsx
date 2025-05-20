import ButtonIcon from "@components/ButtonIcon";
import {
  CardLarge,
  CardSmall,
  Container,
  ContainerCards,
  Header,
  Stats,
  SubTitle,
  Title,
  View,
} from "./styles";

export default function Status() {
  return (
    <Container>
      <View>
        <Header type="Green">
          <Title>90,86%</Title>
          <SubTitle>das refeições dentro da dieta</SubTitle>
        </Header>
        <Stats>

          <SubTitle bold>Estatísticas gerais</SubTitle>

          <CardLarge>
            <Title>22</Title>
            <SubTitle >melhor sequência de pratos dentro da dieta</SubTitle>
          </CardLarge>

          <CardLarge>
            <Title>109</Title>
            <SubTitle>Refeições registradas</SubTitle>
          </CardLarge>

          <ContainerCards>
            <CardSmall type="Green">
              <Title>99</Title>
              <SubTitle>refeições dentro da dieta</SubTitle>
            </CardSmall>

            <CardSmall type="Red">
              <Title>10</Title>
              <SubTitle>refeições fora da dieta</SubTitle>
            </CardSmall>
          </ContainerCards>


        </Stats>
      </View>
    </Container>
  );
}
