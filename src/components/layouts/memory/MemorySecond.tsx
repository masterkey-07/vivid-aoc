import { BasicContent, Bold } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

export const MemorySecond = () => {
  return (
    <BasicContent>
      <p style={{ fontSize: "1.5rem", textAlign: "left" }}>
        A <Bold>Hierarquia de Memória</Bold> é a organização de diferentes
        níveis de armazenamento de dados em um sistema de computador, projetada
        para otimizar o desempenho e a eficiência no acesso a dados e
        instruções. Essa hierarquia é organizada em camadas, cada uma com
        características específicas de tamanho, velocidade e custo. Os níveis
        típicos de uma hierarquia de memória incluem:
        <ul style={{ marginLeft: "2rem" }}>
          <li> Registradores da CPU</li>
          <li>Cache L1 e L2</li>
          <li>RAM</li>
          <li>Armazenamento em nuvem</li>
        </ul>
        <br />
        Agora iremos utilizar os conceitos de<Bold>
          {" "}
          memória cache L1 e L2
        </Bold>{" "}
        para fazer uma simulação, tais que L1 Cache é mais próxima da CPU,
        rápida, armazena dados e instruções frequentes. L2 Cache está entre L1 e
        memória principal, maior e mais lenta, compartilhada entre núcleos.
        Ambas melhoram o desempenho ao reduzir o tempo de acesso à memória
        principal, explorando o princípio da localidade.
      </p>

      <Button text="Voltar" link="/memory/first-section" isBack />
      <Button text="Continuar!" link="/memory/third-section" />
    </BasicContent>
  );
};
