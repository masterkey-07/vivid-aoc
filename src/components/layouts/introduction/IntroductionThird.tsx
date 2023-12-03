import Button from "../../button/Button";

export const IntroductionThird = () => {
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
          Os tópicos abordados nessa aventura serão:
        </p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            color: "#3C486B",
          }}
        >
          <br></br>
          -Pipeline
          <br></br>
          -Unidade Central de Processamento
          <br></br>
          -Memória Cache
          <br></br>
          -Hierarquia de memória
          <br></br>
          -Instruções
        </p>
        <Button text="Voltar" link="/introduction/second-section" isBack />
        <Button text="Continuar!" link="/introduction/fourth-section" />
      </div>
    </div>
  );
};
