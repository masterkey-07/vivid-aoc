import Button from "../../button/Button";

export const ArchitectureSecond = () => {
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
          Vamos explorar quatro elementos essenciais que desempenham papéis cruciais no funcionamento de um processador:
        </p>
        <br>
        </br><br>
        </br>
          <ul style={{ fontSize: '2rem', textAlign: 'left', marginLeft: '50px', color: '#3C486B', }}>
          <li>ALU (Unidade Lógica Aritmética)</li>
          <li>PC (Contador de Programa)</li>
          <li>Registradores</li>
          <li>Controle</li>
        </ul>
        <p style={{ fontSize: '2rem', marginTop: '20px', color: '#3C486B' }}>
          Cada um desses componentes desempenha uma função específica no processamento de informações e na execução de instruções. Vamos mergulhar mais fundo para entender como eles interagem e contribuem para o funcionamento eficiente de uma arquitetura de computadores.
        </p>
        <Button text="Continuar!" link="/architecture/third-section" />
      </div>
    </div>
  );
};