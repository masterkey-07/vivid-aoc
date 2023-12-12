import Button from "../../button/Button";
import ArchitectureImage from "../../../assets/architecture.png";
import { BasicContent, Bold } from "../../basic-content/BasicContent";
import { HelpCircle } from "../../help-circle/HelpCircle";
import { CSSProperties } from "react";

const imageStyle: CSSProperties = {
  width: "50rem",
  height: "auto",
  marginBottom: "20px",
  position: "relative",
  filter: "invert(1)",
  userSelect: "none",
};

export const ArchitectureThird = () => {
  return (
    <BasicContent>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <img draggable={false} src={ArchitectureImage} style={imageStyle} />

        <HelpCircle
          width="100px"
          height="100px"
          circlePosition={{ top: 74.5, left: 35 }}
          tooltipPosition={{ top: 100, left: 12 }}
        >
          A <Bold> Unidade de Controle (UC)</Bold> é o componente central
          responsável por coordenar e controlar todas as operações na CPU MIPS
          multiciclo. Ela gera sinais de controle precisos para direcionar os
          vários estágios de execução de instruções, garantindo que as operações
          sejam executadas em ciclos de clock específicos. A UC também
          desempenha um papel fundamental na seleção dos caminhos de dados
          corretos durante a execução das instruções MIPS multi-ciclo,
          garantindo que os sinais adequados sejam enviados aos multiplexadores
          nos momentos apropriados.
        </HelpCircle>

        <HelpCircle
          width="100px"
          height="100px"
          circlePosition={{ top: 45.5, left: 58 }}
          tooltipPosition={{ top: 22, left: 70 }}
        >
          A <Bold> ALU</Bold> no MIPS multi-ciclo é responsável por realizar
          operações aritméticas e lógicas nas instruções. Durante a execução de
          instruções, a UC coordena o uso da ALU nos estágios apropriados do
          pipeline multi-ciclo para realizar as operações necessárias. A ALU
          desempenha um papel central na realização de cálculos e na manipulação
          de dados de acordo com as instruções MIPS multi-ciclo.
        </HelpCircle>

        <HelpCircle
          width="180px"
          height="180px"
          circlePosition={{ top: 38, left: 33 }}
          tooltipPosition={{ top: 70, left: 53 }}
        >
          Os <Bold> registradores</Bold> são unidades de armazenamento de alta
          velocidade dentro da CPU MIPS multi-ciclo, usados para armazenar dados
          temporariamente durante o processamento de instruções. Eles
          desempenham um papel crucial nas operações de leitura, escrita e
          manipulação de dados durante os diferentes estágios da execução de
          instruções no MIPS multi-ciclo. Os registradores incluem o Registro de
          Dados (ou acumulador), o Registro de Endereço, o Registro de Status e
          outros que são usados em várias instruções.
        </HelpCircle>

        <HelpCircle
          width="50px"
          height="120px"
          circlePosition={{ top: 43, left: 5.5 }}
          tooltipPosition={{ top: 15, left: -23 }}
        >
          O <Bold> Contador de Programa (PC)</Bold> em uma CPU MIPS multiciclo
          mantém o endereço da próxima instrução a ser buscada na memória. A UC
          controla o PC, garantindo que ele seja atualizado corretamente durante
          cada ciclo de clock para seguir a sequência de execução das
          instruções. O PC é essencial para garantir a execução ordenada das
          instruções em um pipeline de múltiplos ciclos.
        </HelpCircle>
      </div>
      <Button text="Voltar" link="/architecture/second-section" isBack />
      <Button text="Continuar!" link="/architecture/fourth-section" />
    </BasicContent>
  );
};
