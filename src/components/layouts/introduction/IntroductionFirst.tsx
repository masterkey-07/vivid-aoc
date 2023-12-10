import { BasicContent, Bold } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

export const IntroductionFirst = () => {
  return (
    <BasicContent>
      Bem-vindo ao <Bold>Vivid AOC</Bold>! <br />
      <br /> Uma emocionante aventura interativa projetada para desvendar os
      segredos da Arquitetura e Organização de Computadores
      <Button text="Voltar" link="/" isBack />
      <Button text="Continuar!" link="/introduction/second-section" />
    </BasicContent>
  );
};
