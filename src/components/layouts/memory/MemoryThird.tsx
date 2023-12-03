import { Fragment } from "react";
import Button from "../../button/Button";

export const MemoryThird = () => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          height: "90%",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <div style={{ marginTop: "5vh", flex: "0.8" }}></div>
        <div style={{ flex: "0.1" }}></div>
      </div>
      <Button text="Voltar" link="/memory/second-section" isBack />
      <Button text="Continuar!" link="/memory/fourth-section" />
    </Fragment>
  );
};
