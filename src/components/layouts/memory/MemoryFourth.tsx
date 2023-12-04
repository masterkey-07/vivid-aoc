import { useState } from "react";
import Button from "../../button/Button";

export const MemoryFourth = () => {
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
  });

  const checkAnswers = () => {
    setAnswers({
      ...answers,
      question1: "B",
      question2: "D",
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
          <p
            style={{ fontSize: "1.5rem", color: "#3C486B", textAlign: "left" }}
          >
            Pergunta 1: Qual é o principal objetivo do uso de memória cache em
            um sistema de computador?
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
              A) Aumentar o tamanho da memória principal.
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
              B) Reduzir o custo dos computadores.
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
              C) Acelerar o acesso aos dados frequentemente usados.
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
              D) Armazenar permanentemente os programas.
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
              E) Aumentar o tamanho da RAM.
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
            Pergunta 2: Como a localidade espacial e temporal é importante para
            o desempenho da memória cache?
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
              A) Não afeta o desempenho da memória cache.
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
              B) Reduz a capacidade da memória cache.
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
              C) Aumenta a latência da memória cache.
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
              D) Melhora a eficiência da memória cache
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
              E) Torna a memória cache mais cara.
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
              Pergunta 1: {answers.question1 === "C" ? "Correta" : "Incorreta"}
            </p>
            <p
              style={{
                fontSize: "1.7rem",
                color: "#3C486B",
                textAlign: "left",
              }}
            >
              Pergunta 2: {answers.question2 === "D" ? "Correta" : "Incorreta"}
            </p>
          </div>
        )}
        <Button text="Voltar" link="/memory/third-section" isBack />
      </div>
    </div>
  );
};
