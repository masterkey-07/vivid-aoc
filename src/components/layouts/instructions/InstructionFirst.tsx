import Button from "../../button/Button";

export const InstructionFirst = () => {
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
        O formato de uma instrução refere-se à maneira que uma instrução é organizada e codificada em uma arquitetura específica. Ela determina como a instrução deve ser interpretada pela CPU e contém vários campos que referenciam qual operação será feita, sobre quais operandos e, eventualmente, algum código de operação adicional e modo de endereçamento.
        </p>
        <Button text="Continuar!" link="/instructions/second-section" />
      </div>
    </div>
  );
};
