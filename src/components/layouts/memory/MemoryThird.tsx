import { Fragment, useState } from "react";
import Button from "../../button/Button";

const database = "ABCDEFGHIKLMNOPQRSTU";

const MemoryTable = ({
  length,
  title,
  data,
}: {
  length: number;
  title: string;
  data?: (string | undefined)[];
}) => {
  const thStyle: React.CSSProperties = {
    padding: "3px",
    fontSize: "1.2rem",
    border: "1px solid gray",
    textAlign: "center",
  };

  return (
    <Fragment>
      <h1 style={{ color: "white" }}>{title}</h1>
      <table
        style={{
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.6)",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Índice</th>
            <th style={thStyle}>Dado</th>
          </tr>
        </thead>
        <tbody>
          {Array(length)
            .fill(0)
            .map((_, index) => (
              <tr>
                <td style={thStyle}>{index}</td>
                <td style={thStyle}>
                  {data ? data[index] || "-" : database[index]}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export const MemoryThird = () => {
  const buttons = 16;

  const L1Size = 4;
  const L2Size = 8;

  const [dataL1, setDataL1] = useState<(string | undefined)[]>([]);
  const [dataL2, setDataL2] = useState<(string | undefined)[]>([]);
  const [log, setLog] = useState("");

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
        <div style={{ marginTop: "5vh", flex: "0.8", display: "flex" }}>
          <div style={{ flex: "0.3", padding: "1rem" }}>
            <MemoryTable title="Memória Principal" length={16} />
          </div>
          <div
            style={{
              flex: "0.3",
              padding: "1rem",
              display: "flex",
              flexFlow: "column",
            }}
          >
            <MemoryTable
              title="Memória Cache L1"
              length={L1Size}
              data={dataL1}
            />
            <br />
            <MemoryTable
              title="Memória Cache L2"
              length={L2Size}
              data={dataL2}
            />
          </div>
          <div style={{ flex: "0.4", padding: "1rem" }}>
            <textarea
              value={log}
              style={{
                width: "100%",
                height: "100%",
              }}
              disabled
              contentEditable={false}
            />
          </div>
        </div>
        <div
          style={{
            flex: "0.1",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button
            style={{
              height: "3rem",
              padding: "0.5rem",
            }}
            onClick={() => {
              setDataL1([]);
              setDataL2([]);
              setLog("");
            }}
          >
            Limpar
          </button>
          {Array(buttons)
            .fill(0)
            .map((_, index) => (
              <button
                style={{
                  height: "3rem",
                  padding: "0.5rem",
                }}
                onClick={() => {
                  const accessData = database[index];

                  const indexL1 = index % L1Size;

                  if (dataL1[indexL1] === accessData)
                    return setLog(
                      (previousLog) =>
                        `L1: Índice ${indexL1} Hit\n${previousLog}`
                    );
                  else
                    setLog(
                      (previousLog) =>
                        `L1: Índice ${indexL1} Miss\n${previousLog}`
                    );

                  const indexL2 = index % L2Size;

                  if (dataL2[indexL2] === accessData) {
                    setDataL1((data) => {
                      data[indexL1] = accessData;

                      return [...data];
                    });

                    return setLog(
                      (previousLog) =>
                        `L2: Índice ${indexL2} Hit\n${previousLog}`
                    );
                  } else
                    setLog(
                      (previousLog) =>
                        `L2: Índice ${indexL2} Miss\n${previousLog}`
                    );

                  setDataL2((data) => {
                    data[indexL2] = accessData;

                    return [...data];
                  });

                  setDataL1((data) => {
                    data[indexL1] = accessData;

                    return [...data];
                  });
                }}
              >
                Acesso {index}
              </button>
            ))}
        </div>
      </div>
      <Button text="Voltar" link="/memory/second-section" isBack />
      <Button text="Continuar!" link="/memory/fourth-section" />
    </Fragment>
  );
};
