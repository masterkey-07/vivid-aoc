import { useState } from "react";
import Button from "../../button/Button";

export const InstructionSecond = () => {
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
  });

  const checkAnswers = () => {
    setAnswers({
      ...answers,
      question1: "D",
      question2: "C",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          border: "2px solid white",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <h2 style={{ fontSize: "3rem", color: "#3C486B" }}>Quiz</h2>
        <div style={{ marginTop: "30px", textAlign: "left" }}>
          <p style={{ fontSize: "1.5rem", color: "#3C486B", textAlign: "left" }}>
            Pergunta 1: Como as instruções são subdivididas em campos e quais são as funções típicas desses campos em um processador?

            </p>
          <br></br>
          <form>
            <label
              style={{
                fontSize: "1.5rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="A"
                checked={answers.question1 === "A"}
                onChange={() => setAnswers({ ...answers, question1: "A" })}
              />
              A) Para armazenar dados do usuário e controlar a operação do processador.
              </label>
            <br />
            <br></br>
            <label
              style={{
                fontSize: "1.7rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="B"
                checked={answers.question1 === "B"}
                onChange={() => setAnswers({ ...answers, question1: "B" })}
              />
              B) Para economizar espaço na memória e acelerar a execução das instruções.
              </label>
            <br />
            <br></br>
            <label
              style={{
                fontSize: "1.5rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="C"
                checked={answers.question1 === "C"}
                onChange={() => setAnswers({ ...answers, question1: "C" })}
              />
              C) Para realizar operações matemáticas complexas e controlar o acesso à memória principal.
              </label>
            <br />
            <br></br>
            <label
              style={{
                fontSize: "1.5rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="D"
                checked={answers.question1 === "D"}
                onChange={() => setAnswers({ ...answers, question1: "D" })}
              />
              D) Para especificar a operação a ser executada, os operandos e onde o resultado será armazenado.
              </label>
            <br />
            <br></br>
            <label
              style={{
                fontSize: "1.5rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="E"
                checked={answers.question1 === "E"}
                onChange={() => setAnswers({ ...answers, question1: "E" })}
              />
              E) Para facilitar a programação de software e aumentar a complexidade do processador.
              </label>
          </form>

          <br></br>
          <p
            style={{
              fontSize: "1.5rem",
              marginTop: "20px",
              color: "#3C486B",
              textAlign: "left",
            }}
          >
            Pergunta 2: Qual é a importância da padronização dos formatos das instruções e dos campos em uma arquitetura de processador?
            </p>
          <br></br>
          <form>
            <label
              style={{
                fontSize: "1.5rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="A"
                checked={answers.question2 === "A"}
                onChange={() => setAnswers({ ...answers, question2: "A" })}
              />
              A) Para tornar a programação mais complicada.
              </label>
            <br />
            <br></br>
            <label
              style={{
                fontSize: "1.5rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="B"
                checked={answers.question2 === "B"}
                onChange={() => setAnswers({ ...answers, question2: "B" })}
              />
              B) Para limitar a variedade de operações possíveis.
              </label>
            <br />
            <br></br>
            <label
              style={{
                fontSize: "1.7rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="C"
                checked={answers.question2 === "C"}
                onChange={() => setAnswers({ ...answers, question2: "C" })}
              />
              C) Para facilitar a compatibilidade entre diferentes processadores.
              </label>
            <br />
            <br></br>
            <label
              style={{
                fontSize: "1.7rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="D"
                checked={answers.question2 === "D"}
                onChange={() => setAnswers({ ...answers, question2: "D" })}
              />
              D) Para aumentar a complexidade do processador.
              </label>
            <br />
            <br></br>
            <label
              style={{
                fontSize: "1.7rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              <input
                type="radio"
                value="E"
                checked={answers.question2 === "E"}
                onChange={() => setAnswers({ ...answers, question2: "E" })}
              />
              E) Para reduzir o desempenho do processador.
              </label>
          </form>
        </div>
        <br></br>
        {answers.question1 !== null && answers.question2 !== null && (
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "2rem", color: "#3C486B" }}>Respostas:</p>
            <p
              style={{
                fontSize: "1.7rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              Pergunta 1: {answers.question1 === "D" ? "Correta" : "Incorreta"}
              </p>
            <p
              style={{
                fontSize: "1.7rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              Pergunta 2: {answers.question2 === "C" ? "Correta" : "Incorreta"}
            </p>
          </div>
        )}
        <Button text="Continuar!" link="/memory/first-section" />
      </div>
    </div>
  );
};
