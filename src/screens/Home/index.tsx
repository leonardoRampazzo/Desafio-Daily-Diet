import { Container, CardPerc, Text, Header, Image, Logo } from "./styles";

import ButtonIcon from "@components/ButtonIcon";
import { Plus } from "phosphor-react-native";

import logoImg from "@assets/Logo.png";
import { SectionList } from "react-native";
import { CardList } from "@components/CardList";

import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const md5 = require("js-md5");
  const hash = md5("leonardo.rampazzo@outlook.com");
  const url = `https://www.gravatar.com/avatar/${hash}?s=200&d=identicon`;
  const perc = 90.91;

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
      <ButtonIcon icon={Plus} text="Nova Refeição" type="PRIMARY"></ButtonIcon>

      <SectionList
        sections={[
          {
            title: "05/01/2024",
            data: [
              { hora: "20:00", title: "X-tudo", status: false },
              { hora: "16:00", title: "Bauru", status: true },
              { hora: "12:30", title: "Almoção top", status: true },
              { hora: "09:30", title: "Pão com manteiga", status: false },
            ],
          },
          {
            title: "04/01/2024",
            data: [
              { hora: "20:00", title: "X-tudo", status: false },
              { hora: "16:00", title: "Bauru", status: true },
              { hora: "12:30", title: "Almoção top", status: true },
              { hora: "09:30", title: "Pão com manteiga", status: false },
            ],
          },
          {
            title: "03/01/2024",
            data: [
              { hora: "20:00", title: "X-tudo", status: false },
              { hora: "16:00", title: "Bauru", status: true },
              { hora: "12:30", title: "Almoção top", status: true },
              { hora: "09:30", title: "Pão com manteiga", status: false },
            ],
          },
        ]}
        keyExtractor={(item, index) => item.title + item.hora + index}
        renderItem={({ item }) => (
          <CardList time={item.hora} title={item.title} status={item.status} />
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
