import styles from "./styles.module.scss";
import LavaImage from "../../../assets/lava.svg";
import SecaImage from "../../../assets/seca.svg";
import DobraImage from "../../../assets/dobra.svg";
import EntregaImage from "../../../assets/entrega.svg";

import React, { Fragment, ReactNode, useState } from "react";
import Button from "../../button/Button";

const NotDoneColor = "#bc4749";
const DoneColor = "#6a994e";

const PipelineHeader = () => {
  return (
    <div className={styles.tableHeader}>
      <p>6h</p>
      <p>6h30</p>
      <p>7h</p>
      <p>7h30</p>
      <p>8h</p>
      <p>8h30</p>
      <p>9h</p>
      <p>9h30</p>
      <p>10h</p>
      <p>10h30</p>
      <p>11h</p>
      <p>11h30</p>
      <p>12h</p>
      <p>12h30</p>
      <p>13h</p>
      <p>13h30</p>
      <p>14h</p>
      <p>14h30</p>
      <p>15h</p>
      <p>15h30</p>
    </div>
  );
};

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

  const chamberArray = Array(chamber).fill(0);
  const arrayOf17 = Array(17).fill(0);
  const arrayOf20 = Array(20).fill(0);

  return (
    <>
      <article className={styles.container}>
        <div className={styles.content}>
          <div className={styles.animationContainer}>
            <button disabled={inPlay} type="button" onClick={addPipeline}>
              + 1 cliente
            </button>
            <button disabled={inPlay} type="button" onClick={removePipeline}>
              - 1 cliente
            </button>
            <button type="button" onClick={startPlay}>
              Play
            </button>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.tableContainer}>
              <PipelineHeader />
              <Table>
                {chamberArray.map((_, index) => (
                  <Fragment>
                    <StepImages
                      play={inPlay}
                      timeout={index + 1}
                      type={false}
                    />
                    {arrayOf20.map(() => (
                      <div />
                    ))}
                  </Fragment>
                ))}
              </Table>
            </div>
            <PipelineHeader />
            <div>
              <Table>
                {chamberArray.map((_, index) => (
                  <Fragment>
                    <StepImages play={inPlay} timeout={index + 1} type={true} />
                    {arrayOf17.map(() => (
                      <div />
                    ))}
                  </Fragment>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </article>
      <Button text="Voltar" link="/pipeline/second-section" isBack />
      <Button text="Próximo" link="/pipeline/fourth-section" />
    </>
  );
}

function Table({ children }: { children: ReactNode }) {
  return <div className={styles.table}>{children}</div>;
}

type StepImagesStatus = [boolean, boolean, boolean, boolean];

const StepImages = ({
  play,
  timeout,
  type,
}: {
  play: boolean;
  timeout: number;
  type: boolean;
}) => {
  const baseTimeout = type
    ? 1000 * timeout
    : timeout === 1
    ? 1000
    : 4000 * (timeout - 1) + 1000;

  const [concluded, setConcluded] = useState<StepImagesStatus>([
    false,
    false,
    false,
    false,
  ]);

  React.useLayoutEffect(() => {
    if (play) {
      const a = setTimeout(
        () => setConcluded([true, false, false, false]),
        baseTimeout
      );

      const b = setTimeout(
        () => setConcluded([true, true, false, false]),
        baseTimeout + 1000
      );

      const c = setTimeout(
        () => setConcluded([true, true, true, false]),
        baseTimeout + 2000
      );

      const d = setTimeout(
        () => setConcluded([true, true, true, true]),
        baseTimeout + 3000
      );

      return () => {
        clearTimeout(a);
        clearTimeout(b);
        clearTimeout(c);
        clearTimeout(d);
      };
    } else {
      setConcluded([false, false, false, false]);
    }
  }, [play]);

  const defineColor = (concluded: boolean) =>
    play ? (concluded ? DoneColor : NotDoneColor) : "";

  return (
    <Fragment>
      <img
        className={styles.icon}
        src={LavaImage}
        alt=""
        style={{ backgroundColor: defineColor(concluded[0]) }}
      />
      <img
        className={styles.icon}
        src={SecaImage}
        alt=""
        style={{ backgroundColor: defineColor(concluded[1]) }}
      />
      <img
        className={styles.icon}
        src={DobraImage}
        alt=""
        style={{ backgroundColor: defineColor(concluded[2]) }}
      />
      <img
        className={styles.icon}
        src={EntregaImage}
        alt=""
        style={{ backgroundColor: defineColor(concluded[3]) }}
      />
    </Fragment>
  );
};
