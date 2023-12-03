import Button from "../../button/Button";

export const IntroductionSecond = () => {
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
        <p
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            color: "#3C486B",
          }}
        >
          Nosso objetivo é tornar o aprendizado desses conceitos complexos uma
          jornada envolvente e acessível para todas as idades. Navegue por uma
          CPU misteriosa, solucione quebra-cabeças e mergulhe na essência da
          tecnologia computacional enquanto se diverte.
        </p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            color: "#3C486B",
          }}
        >
          Prepare-se para desvendar o mundo da AOC e experimentar uma abordagem
          única de aprendizado prático
        </p>
        <Button text="Voltar" link="/introduction/first-section" isBack />
        <Button text="Continuar!" link="/introduction/third-section" />
      </div>
    </div>
  );
};
