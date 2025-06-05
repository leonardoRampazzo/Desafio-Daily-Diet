import { SectionList } from "react-native";

import { Container, CardPerc, Text, Header, Image, Logo } from "./styles";

import ButtonIcon from "@components/ButtonIcon";
import { Plus } from "phosphor-react-native";

import logoImg from "@assets/Logo.png";
import { CardList } from "@components/CardList";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { getMeals } from "@storage/meal";
import { useCallback, useState } from "react";

import { md5 } from "js-md5";

export default function Home() {
  //const md5 = require("js-md5");
  const hash = md5("leonardo.rampazzo@outlook.com");
  const url = `https://www.gravatar.com/avatar/${hash}?s=200&d=identicon`;

  const [perc, setPerc] = useState("0,00");
  const navigation = useNavigation();

  const [formattedMeals, setFormattedMeals] = useState<Section[]>([]);

  const handleNewMeal = () => {
    navigation.navigate("meal");
  };

  const handleView = (item: Meal) => {
    navigation.navigate("mealView", item);
  };

  const fetchMeals = async () => {
    try {
      const meals = await getMeals();
      const formatted = convertMealsToSections(meals as MealFromStorage[]);
      setFormattedMeals(formatted);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  const convertMealsToSections = (meals: MealFromStorage[]): Section[] => {
    const grouped: Section[] = [];
    let total = 0;
    let mealsInDiet = 0;

    meals.forEach((meal) => {
      const {
        Data: date,
        Hour: hour,
        Name: name,
        Status: status,
        Desc: desc,
      } = meal;

      const existingSection = grouped.find((section) => section.title === date);

      const item: Meal = {
        Name: name,
        Desc: desc,
        Data: date,
        Hora: hour,
        Status: status,
      };

      if (existingSection) {
        existingSection.data.push(item);
      } else {
        grouped.push({
          title: date,
          data: [item],
        });
      }
      total++;
      if (status) {
        mealsInDiet += 1;
      }
    });

    grouped.forEach((section) => {
      section.data.sort((a, b) => a.Hora.localeCompare(b.Hora));
    });

    grouped.sort((a, b) => b.title.localeCompare(a.title));

    setPerc(((mealsInDiet / (total == 0 ? 1 : total)) * 100).toFixed(2));

    return grouped;
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Logo source={logoImg}></Logo>
        <Image source={{ uri: url }} />
      </Header>

      <CardPerc type="Green">
        <Text bold size={36}>
          {perc}%
        </Text>
        <Text size={16}>das refeições dentro da dieta</Text>
      </CardPerc>

      <Text size={20}>Refeições</Text>
      <Text size={10}></Text>
      <ButtonIcon
        Icon={Plus}
        text="Nova Refeição"
        type="PRIMARY"
        onPress={handleNewMeal}
      ></ButtonIcon>

      <SectionList
        sections={formattedMeals}
        keyExtractor={(item, index) => item.Name + item.Hora + index}
        renderItem={({ item }) => (
          <CardList
            time={item.Hora}
            title={item.Name}
            status={item.Status}
            onPress={() => handleView(item)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <>
            <Text bold size={20}></Text>
            <Text bold size={20} marginBottom={10}>
              {title}
            </Text>
          </>
        )}
      />

      <LinearGradient
        colors={["transparent", "#fafafa"]}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 140,
        }}
        pointerEvents="none"
      />
    </Container>
  );
}
