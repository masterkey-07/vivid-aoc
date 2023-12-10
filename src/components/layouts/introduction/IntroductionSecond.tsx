import { BasicContent } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

export const IntroductionSecond = () => {
  return (
    <BasicContent>
      <p style={{ fontSize: "2.5rem" }}>
        Nosso objetivo é tornar o aprendizado desses conceitos complexos uma
        jornada envolvente e acessível para todas as idades.
        <br />
        <br />
        Navegue por uma CPU misteriosa, solucione quebra-cabeças e mergulhe na
        essência da tecnologia computacional enquanto se diverte.
        <br />
        <br />
        Prepare-se para desvendar o mundo da AOC e experimentar uma abordagem
        única de aprendizado prático
      </p>
      <Button text="Voltar" link="/introduction/first-section" isBack />
      <Button text="Continuar!" link="/introduction/third-section" />
    </BasicContent>
  );
};
