import Button from "../../button/Button";

export const MemoryFourth = () => {
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
          Agradecimentos para a equipe de desenvolvimento do Vivid AOC:
        </p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            color: "#3C486B",
          }}
        >
          <br></br>
          -Victor
          <br></br>
          -Maria Clara
          <br></br>
          -David
          <br></br>
          -João
          <br></br>
          -Vinicius
        </p>
        <Button text="Continuar!" link="/memory/fourth-section" />
      </div>
    </div>
  );
};
