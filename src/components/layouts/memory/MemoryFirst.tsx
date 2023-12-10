import { BasicContent, Bold } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

export const MemoryFirst = () => {
  return (
    <BasicContent>
      <p>
        A <Bold>Memória Cache</Bold> é uma memória volátil com alta velocidade,
        localizada dentro ou próxima à{" "}
        <Bold> Unidade Central de Processamento</Bold> (CPU). Ela funciona como
        um armazenamento para dados e instruções que são frequentemente
        acessados pela CPU, reduzindo, portanto, a necessidade de acessar a
        <Bold> Memória RAM</Bold>. Essa redução de acesso à RAM resulta em
        melhorias significativas no desempenho geral do sistema
      </p>
      <Button text="Voltar" link="/pipeline/fourth-section" isBack />
      <Button text="Continuar!" link="/memory/second-section" />
    </BasicContent>
  );
};
