import { Fragment } from "react";
import Button from "../../../button/Button";
import { CSSProperties } from "styled-components";
import { useCacheSimulation } from "./cache-simulation-hook";

type MemoryTableProps = {
  length: number;
  title: string;
  data?: (number | undefined)[];
};

const MemoryTable = ({ length, title, data }: MemoryTableProps) => {
  const thStyle: CSSProperties = {
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
                  {data ? data[index]?.toString(16) || "-" : index.toString(16)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export const MemoryThird = () => {
  const mainSize = 16;
  const l1Size = 4;
  const l2Size = 8;

  const { hitRate, clearMemory, fetchMemory, l1Memory, l2Memory, log } =
    useCacheSimulation(l1Size, l2Size, mainSize);

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
        <div style={{ marginTop: "5vh", flex: "0.7", display: "flex" }}>
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
              length={l1Size}
              data={l1Memory}
            />
            <br />
            <MemoryTable
              title="Memória Cache L2"
              length={l2Size}
              data={l2Memory}
            />
          </div>
          <div style={{ flex: "0.4", padding: "1rem" }}>
            <textarea
              value={log}
              style={{
                width: "100%",
                height: "100%",
                fontSize: "1.2rem",
              }}
              disabled
              contentEditable={false}
            />
          </div>
        </div>
        <div
          style={{
            flex: "0.1",
          }}
        >
          <h1 style={{ color: "white", textShadow: "0 0 10px black" }}>
            Hit Rate: {Math.round(10000 * hitRate) / 100}%
          </h1>
        </div>
        <div
          style={{
            flex: "0.1",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button
            style={{ height: "3rem", padding: "0.5rem" }}
            onClick={clearMemory}
          >
            Limpar
          </button>
          {Array(mainSize)
            .fill(0)
            .map((_, index) => (
              <button
                style={{ height: "3rem", padding: "0.5rem" }}
                onClick={() => fetchMemory(index)}
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
