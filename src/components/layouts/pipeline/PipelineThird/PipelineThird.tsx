import { Fragment, useState } from "react";
import Button from "../../../button/Button";
import { TaskEvent } from "./TaskEvent";
import { BasicContent, Bold } from "../../../basic-content/BasicContent";
import { Simulation, SimulationContainer, SimulationHeader } from "./styles";

export function PipelineThirdSection() {
  const [chamber, setChamber] = useState(0);
  const [inPlay, setInPlay] = useState(false);

  const addPipeline = function () {
    setChamber((chamber) => (chamber >= 5 ? 5 : chamber + 1));
  };

  const removePipeline = function () {
    setChamber((chamber) => (chamber == 0 ? 0 : chamber - 1));
  };

  const startPlay = () => {
    setInPlay(!inPlay);
  };

  return (
    <BasicContent>
      <SimulationContainer>
        <SimulationHeader>
          <button disabled={inPlay} type="button" onClick={addPipeline}>
            Adicionar Cliente
          </button>
          <button disabled={inPlay} type="button" onClick={removePipeline}>
            Remover Cliente
          </button>
          <button type="button" onClick={startPlay}>
            {inPlay ? "Parar" : "Iniciar"} Simulacao
          </button>
        </SimulationHeader>
        <PipelineSimulations inPlay={inPlay} chamber={chamber} />
      </SimulationContainer>
      <Button text="Voltar" link="/pipeline/second-section" isBack />
      <Button text="Próximo" link="/pipeline/fourth-section" />
    </BasicContent>
  );
}

const PipelineHeader = () => {
  return (
    <Fragment>
      <span>6h</span>
      <span>6h30</span>
      <span>7h</span>
      <span>7h30</span>
      <span>8h</span>
      <span>8h30</span>
      <span>9h</span>
      <span>9h30</span>
      <span>10h</span>
      <span>10h30</span>
      <span>11h</span>
      <span>11h30</span>
      <span>12h</span>
      <span>12h30</span>
      <span>13h</span>
      <span>13h30</span>
      <span>14h</span>
      <span>14h30</span>
      <span>15h</span>
      <span>15h30</span>
    </Fragment>
  );
};

const PipelineSimulations = ({
  inPlay,
  chamber,
}: {
  inPlay: boolean;
  chamber: number;
}) => {
  const chambers = Array(chamber).fill(0);

  const arrayOf17 = Array(17).fill(0);

  const arrayOf20 = Array(20).fill(0);

  if (!chamber)
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Bold> Adicione Clientes para Comecar a Simulacao!</Bold>
      </div>
    );

  return (
    <Fragment>
      <Simulation>
        <PipelineHeader />
        {chambers.map((_, index) => (
          <Fragment>
            <TaskEvent play={inPlay} timeout={index + 1} type={false} />
            {index + 1 < chambers.length
              ? arrayOf20.map(() => <div />)
              : Array(16 - 3 * index - index)
                  .fill(0)
                  .map(() => <div />)}
          </Fragment>
        ))}
      </Simulation>
      <Simulation>
        <PipelineHeader />
        {chambers.map((_, index) => (
          <Fragment>
            <TaskEvent play={inPlay} timeout={index + 1} type={true} />
            {index + 1 < chambers.length
              ? arrayOf17.map(() => <div />)
              : Array(16 - index)
                  .fill(0)
                  .map(() => <div />)}
          </Fragment>
        ))}
      </Simulation>
    </Fragment>
  );
};
