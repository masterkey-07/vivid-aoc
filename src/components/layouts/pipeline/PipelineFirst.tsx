import { BasicContent, Bold } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

export function PipelineFirstSection() {
  return (
    <BasicContent>
      <p>
        Nesta seção você irá visualizar as vantagens de se utilizar o conceito
        chamado de <Bold>Pipeline</Bold>, que consiste, basicamente, em uma
        distribuição mais otimizada das instruções a serem executadas pelo
        processador.
      </p>
      <Button text="Voltar" link="/architecture/fourth-section" isBack />
      <Button text="Próximo" link="/pipeline/second-section" />
    </BasicContent>
  );
}
