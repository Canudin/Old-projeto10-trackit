import { React, useState } from "react";
import styled from "styled-components";

export default function MeusHabitos() {
  const [meusHabitos, setMeusHabitos] = useState("");

  switch (meusHabitos) {
    case 0:
      return (
        <ContentHabitos>
          <p>Caso 0</p>
        </ContentHabitos>
      );
    default:
      return (
        <ContentHabitos>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
          </p>
        </ContentHabitos>
      );
  }
}

const ContentHabitos = styled.div`
  margin: 28px 20px 110px 20px;

  p {
    font-size: 18px;
    color: #666666;
  }
`;
