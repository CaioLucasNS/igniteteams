import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("players", { group });
  }

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container>
        <Header showBackButton />

        <Content>
          <Icon />

          <Highlight
            title="Nova turma"
            subtitle="crie a turma para adicionar as pessoas"
          />

          <Input
            placeholder="Nome da turma"
            onChange={(event) => setGroup(event.nativeEvent.text)}
          />

          <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
}
