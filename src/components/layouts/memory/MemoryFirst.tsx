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
            fontSize: "2rem",
            color: "#3C486B",
          }}
        >
          A Memória Cache é uma memória volátil com alta velocidade, localizada
          dentro ou próxima à Unidade Central de Processamento (CPU). Ela
          funciona como um armazenamento para dados e instruções que são
          frequentemente acessados pela CPU, reduzindo, portanto, a necessidade
          de acessar a memória RAM. Essa redução de acesso à RAM resulta em
          melhorias significativas no desempenho geral do sistema
        </p>
        <Button text="Voltar" link="/pipeline/fourth-section" isBack />
        <Button text="Continuar!" link="/memory/second-section" />
      </div>
    </div>
  );
};
