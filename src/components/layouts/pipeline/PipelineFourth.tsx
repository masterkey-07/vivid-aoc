import { useState } from "react";
import Button from "../../button/Button";

export const PipelineFourthSection = () => {
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
          <p style={{ fontSize: "2rem", color: "#3C486B", textAlign: "left" }}>
            Pergunta 1: Qual é a principal vantagem de um pipeline em um
            processador?
          </p>
          <br></br>
          <form>
            <label
              style={{
                fontSize: "1.7rem",
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
              A) Aumento da complexidade do processador.
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
              B) Redução do consumo de energia.
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
                checked={answers.question1 === "C"}
                onChange={() => setAnswers({ ...answers, question1: "C" })}
              />
              C) Aumento da latência.
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
                checked={answers.question1 === "D"}
                onChange={() => setAnswers({ ...answers, question1: "D" })}
              />
              D) Aumento da velocidade de processamento.
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
                checked={answers.question1 === "E"}
                onChange={() => setAnswers({ ...answers, question1: "E" })}
              />
              E) Diminuição do tamanho do processador.
            </label>
          </form>

          <br></br>
          <p
            style={{
              fontSize: "2rem",
              marginTop: "20px",
              color: "#3C486B",
              textAlign: "left",
            }}
          >
            Pergunta 2: Considerando a aplicação do conceito de pipeline na
            nossa analogia, o que pode acontecer se um cliente quiser que a
            etapa de dobra de suas roupas seja pulada (ele não deseja receber as
            roupas dobradas)?
          </p>
          <br></br>
          <form>
            <label
              style={{
                fontSize: "1.7rem",
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
              A) Atraso na entrega das roupas do cliente.
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
                checked={answers.question2 === "B"}
                onChange={() => setAnswers({ ...answers, question2: "B" })}
              />
              B) Necessidade de retrabalho para adicionar a etapa pulada
              posteriormente.
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
              C) Possível desperdício de recursos e tempo.
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
              D) Melhor eficiência no processamento das roupas.
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
              E) Aumento da velocidade de processamento das roupas.
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
        <Button text="Voltar" link="/pipeline/third-section" isBack />
        <Button text="Continuar!" link="/memory/first-section" />
      </div>
    </div>
  );
};
