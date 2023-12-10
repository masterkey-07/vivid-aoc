import { BasicContent, Bold } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

export const ArchitectureFirst = () => {
  return (
    <BasicContent>
      <p style={{ fontSize: "2.3rem" }}>
        O termo <Bold>Arquitetura</Bold> refere-se ao projeto e à estrutura
        fundamental de um sistema computacional. <br />
        Especificamente, ela abrange a organização e o design dos componentes{" "}
        <i>hardware</i> de um computador, incluindo processadores, memória,
        dispositivos de entrada/saída e a interconexão entre esses elementos.
      </p>
      <Button text="Voltar" link="/introduction/fourth-section" isBack />
      <Button text="Continuar!" link="/architecture/second-section" />
    </BasicContent>
  );
};
