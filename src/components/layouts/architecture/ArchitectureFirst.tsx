import Button from "../../button/Button";

export const ArchitectureFirst = () => {
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
        <p style={{ 
          fontWeight: "bold",
          fontSize: "3rem",
          color: '#3C486B',
        }}>
          O termo "arquitetura" refere-se ao projeto e à estrutura fundamental de um sistema computacional. Especificamente, ela abrange a organização e o design dos componentes hardware de um computador, incluindo processadores, memória, dispositivos de entrada/saída e a interconexão entre esses elementos.
        </p>
        <Button text="Continuar!" link="/architecture/second-section" />
      </div>
    </div>
  );
};
