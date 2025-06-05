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

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { mealCreate } from "@storage/meal";

type RouteParams = {
  Name?: string;
  Description?: string;
  Date?: string;
  Hour?: string;
  Status?: boolean;
};

export default function Meal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [status, setStatus] = useState<boolean | null>(null);

  const navigation = useNavigation();

  const handleSaveMeal = async () => {
    if (!name || !description || !date || !hour || status === null) {
      return alert("Preencha todos os campos!");
    }

    try {
      let meal = {
        Name: name,
        Desc: description,
        Data: date,
        Hour: hour,
        Status: status,
      };

      await mealCreate(meal as Meal);
    } catch (error) {}

    navigation.navigate("confirm", status);
  };

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
