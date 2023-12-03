import Button from "../../button/Button";

export const MemoryFirst = () => {
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
          Bem-vindo ao 'Vivid AOC', uma emocionante aventura interativa
          projetada para desvendar os segredos da Arquitetura e Organização de
          Computadores (AOC).
        </p>
        <Button text="Continuar!" link="/introduction/second-section" />
      </div>
    </div>
  );
};
