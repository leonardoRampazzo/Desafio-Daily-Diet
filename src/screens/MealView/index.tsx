import ButtonIcon from "@components/ButtonIcon";

import { Trash, PencilSimpleLine } from "phosphor-react-native";

import {
  Container,
  Content,
  DateAndTime,
  Label,
  SpaceHorizontal,
  Status,
  SubTitle,
  Title,
  ChipView,
  ChipText,
  ButtonsView,
  Modal,
  ModalView,
  ModalContainer,
  Space,
  ViewRow,
  ModalTitle,
} from "./styles";

import Header from "@components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { mealDelete } from "@storage/meal";

export default function MealView() {
  const navigation = useNavigation();

  const route = useRoute();
  const meal = route.params as Meal;

  const [modal, setModal] = useState(false);

  const handleEditMeal = () => {
    navigation.navigate("meal", meal);
  };

  const handleModalDelete = () => {
    setModal(true);
  };

  const handleDeleteMeal = async () => {
    await mealDelete(meal);
    setModal(false);
    navigation.navigate("home");
  };
  return (
    <>
      <Modal
        transparent={true}
        visible={modal}
        animationType="slide"
        onRequestClose={() => setModal(false)}
      >
        <ModalContainer>
          <ModalView>
            <ModalTitle>
              Deseja realmente excluir o registro da refeição?
            </ModalTitle>
            <ViewRow>
              <ButtonIcon
                type={"SECONDARY"}
                text="Cancelar"
                onPress={() => setModal(false)}
              />
              <Space />
              <ButtonIcon text="Sim, Excluir" onPress={handleDeleteMeal} />
            </ViewRow>
          </ModalView>
        </ModalContainer>
      </Modal>

      <Container type={meal.Status ? "GOOD" : "BAD"}>
        <Header title="Refeição" type={meal.Status ? "GOOD" : "BAD"} />
        <Content>
          <Title>{meal.Name}</Title>
          <SubTitle>{meal.Desc}</SubTitle>
          <Label>Data e Hora</Label>
          <DateAndTime>
            {" "}
            {meal.Data} às {meal.Hora}
          </DateAndTime>
          <ChipView>
            <Status type={meal.Status ? "GOOD" : "BAD"}></Status>
            <ChipText>
              {meal.Status ? "Dentro da Dieta" : "Fora da Dieta"}
            </ChipText>
          </ChipView>
          <SpaceHorizontal />
          <ButtonsView>
            <ButtonIcon
              Icon={PencilSimpleLine}
              text="Editar Refeição"
              onPress={handleEditMeal}
            />
            <ButtonIcon
              Icon={Trash}
              text="Excluir Refeição"
              type="SECONDARY"
              onPress={handleModalDelete}
            />
          </ButtonsView>
        </Content>
      </Container>
    </>
  );
}
