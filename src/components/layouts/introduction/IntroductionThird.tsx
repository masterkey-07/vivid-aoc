import { BasicContent } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

export const IntroductionThird = () => {
  return (
    <BasicContent>
      <p style={{ padding: "0 6rem" }}>
        Os Tópicos Abordados
        <br />
        <br />
        <ol style={{ textAlign: "left" }}>
          <li> Pipeline</li>
          <li> CPU</li>
          <li> Memória Cache</li>
          <li> Hierarquia de memória</li>
          <li> Instruções</li>
        </ol>
      </p>
      <Button text="Voltar" link="/introduction/second-section" isBack />
      <Button text="Continuar!" link="/introduction/fourth-section" />
    </BasicContent>
  );
};
