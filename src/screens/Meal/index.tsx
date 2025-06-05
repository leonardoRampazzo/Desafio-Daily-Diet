import {
  Container,
  Content,
  Space,
  SpaceHorizontal,
  Text,
  ViewRow,
} from "./styles";

import ButtonIcon from "@components/ButtonIcon";
import { Input } from "@components/Input";
import ButtonOpt from "@components/ButtonOpt";
import Header from "@components/Header";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";

import { editMeal, mealCreate } from "@storage/meal";

export default function Meal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [status, setStatus] = useState<boolean | null>(null);

  const [editing, setEditing] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  let meal = route.params as Meal;

  const handleSaveMeal = async () => {
    if (!name || !description || !date || !hour || status === null) {
      return alert("Preencha todos os campos!");
    }
    try {
      let mealNew = {
        Name: name,
        Desc: description,
        Data: date,
        Hora: hour,
        Status: status,
      };
      if (!editing) await mealCreate(mealNew as Meal);
      else {
        await editMeal(meal, mealNew);
      }
    } catch (error) {}

    navigation.navigate("confirm", status);
  };

  useFocusEffect(
    useCallback(() => {
      if (meal && meal.Name) {
        setEditing(true);
        setName(meal.Name);
        setDescription(meal.Desc);
        setDate(meal.Data);
        setHour(meal.Hora);
        setStatus(meal.Status);
      } else {
        setEditing(false);
      }
    }, [meal])
  );

  return (
    <Container>
      <Header title="Nova Refeição"></Header>
      <Content>
        <Input name="Nome" value={name} onChangeText={setName} />
        <Input
          name="Descriçao"
          multiline={true}
          value={description}
          onChangeText={setDescription}
        />

        <ViewRow>
          <Input name="Data" value={date} onChangeText={setDate} />
          <Space />
          <Input name="Hora" value={hour} onChangeText={setHour} />
        </ViewRow>

        <Text>Está dentro da Dieta?</Text>
        <ViewRow>
          <ButtonOpt
            type="SIM"
            text="Sim"
            pressed={status === true}
            onPress={() => setStatus(true)}
          />
          <Space />
          <ButtonOpt
            type="NAO"
            text="Não"
            pressed={status === false}
            onPress={() => setStatus(false)}
          />
        </ViewRow>
        <SpaceHorizontal />
        <ButtonIcon text="Cadastrar Refeição" onPress={handleSaveMeal} />
      </Content>
    </Container>
  );
}
