import { BasicContent, Bold } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

export const ArchitectureSecond = () => {
  return (
    <BasicContent>
      Vamos explorar quatro elementos essenciais que desempenham papéis cruciais
      no funcionamento de um <Bold>Processador</Bold>
      <br></br>
      <br></br>
      <ul
        style={{
          fontSize: "2rem",
          textAlign: "left",
          marginLeft: "50px",
        }}
      >
        <li>ALU (Unidade Lógica Aritmética)</li>
        <li>PC (Contador de Programa)</li>
        <li>Registradores</li>
        <li>Controle</li>
      </ul>
      <p style={{ fontSize: "2rem", marginTop: "20px", textAlign: `left` }}>
        Cada um desses componentes desempenha uma função específica no
        processamento de informações e na execução de instruções. Vamos
        mergulhar mais fundo para entender como eles interagem e contribuem para
        o funcionamento eficiente de uma arquitetura de computadores.
      </p>
      <Button text="Voltar" link="/architecture/first-section" isBack />
      <Button text="Continuar!" link="/architecture/third-section" />
    </BasicContent>
  );
};
