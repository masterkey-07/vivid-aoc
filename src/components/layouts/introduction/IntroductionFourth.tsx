import styled from "styled-components";
import { BasicContent } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

const NameGrid = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const boldStyle = { color: "var(--gold)", textShadow: "0 0 2px white" };

export const IntroductionFourth = () => {
  return (
    <BasicContent>
      <p style={{ padding: "1rem", position: "relative" }}>
        Equipe de Desenvolvimento do <b style={boldStyle}>Vivid AOC</b>
        <br />
        <br />
        <NameGrid>
          <span>Victor Chaves</span> <span> Maria Clara</span>
          <div style={{ gridColumn: "1 / 3", height: "1.8rem" }} />
          <span> David Aaron</span>
          <span> João Gado</span>
          <div style={{ gridColumn: "1 / 3", height: "1.8rem" }} />
          <span style={{ gridColumn: "1 / 3" }}>Vinícius Silva</span>
        </NameGrid>
      </p>
      <Button text="Voltar" link="/introduction/third-section" isBack />
      <Button text="Continuar!" link="/architecture/first-section" />
    </BasicContent>
  );
};
