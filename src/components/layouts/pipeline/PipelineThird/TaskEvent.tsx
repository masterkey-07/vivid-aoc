import { Fragment, useLayoutEffect, useState } from "react";
import LavaImage from "../../../../assets/lava.svg";
import SecaImage from "../../../../assets/seca.svg";
import DobraImage from "../../../../assets/dobra.svg";
import EntregaImage from "../../../../assets/entrega.svg";

const NotDoneColor = "#bc4749";
const DoneColor = "#6a994e";

type StepImagesStatus = [boolean, boolean, boolean, boolean];

type TaskEventProps = {
  play: boolean;
  timeout: number;
  type: boolean;
};

export const TaskEvent = ({ play, timeout, type }: TaskEventProps) => {
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

  useLayoutEffect(() => {
    if (play) {
      const firstConclusionTimeout = setTimeout(
        () => setConcluded([true, false, false, false]),
        baseTimeout
      );

      const secondConclusionTimeout = setTimeout(
        () => setConcluded([true, true, false, false]),
        baseTimeout + 1000
      );

      const thirdConclusionTimeout = setTimeout(
        () => setConcluded([true, true, true, false]),
        baseTimeout + 2000
      );

      const fourthConclusionTimeout = setTimeout(
        () => setConcluded([true, true, true, true]),
        baseTimeout + 3000
      );

      return () => {
        clearTimeout(firstConclusionTimeout);
        clearTimeout(secondConclusionTimeout);
        clearTimeout(thirdConclusionTimeout);
        clearTimeout(fourthConclusionTimeout);
      };
    } else {
      setConcluded([false, false, false, false]);
    }
  }, [play]);

  const defineColor = (concluded: boolean) =>
    play ? (concluded ? DoneColor : NotDoneColor) : "";

  return (
    <Fragment>
      <div style={{ backgroundColor: defineColor(concluded[0]) }}>
        <img src={LavaImage} style={{ filter: "invert(1)" }} />
      </div>
      <div style={{ backgroundColor: defineColor(concluded[1]) }}>
        <img src={SecaImage} style={{ filter: "invert(1)" }} />
      </div>
      <div style={{ backgroundColor: defineColor(concluded[2]) }}>
        <img src={DobraImage} style={{ filter: "invert(1)" }} />
      </div>
      <div style={{ backgroundColor: defineColor(concluded[3]) }}>
        <img src={EntregaImage} style={{ filter: "invert(1)" }} />
      </div>
    </Fragment>
  );
};
