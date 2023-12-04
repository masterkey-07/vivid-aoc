import Button from "../../button/Button";

export const MemorySecond = () => {
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
            fontSize: "1.5rem",
            color: "#3C486B",
            textAlign: "left",
            padding: "1rem",
          }}
        >
          A hierarquia de memória é a organização de diferentes níveis de
          armazenamento de dados em um sistema de computador, projetada para
          otimizar o desempenho e a eficiência no acesso a dados e instruções.
          Essa hierarquia é organizada em camadas, cada uma com características
          específicas de tamanho, velocidade e custo. Os níveis típicos de uma
          hierarquia de memória incluem:
          <ul>
            <li> Registradores da CPU</li>
            <li>Cache L1 e L2</li>
            <li>RAM</li>
            <li>Armazenamento em nuvem</li>
          </ul>
          Agora iremos utilizar os conceitos de memória cache L1 e L2 para fazer
          uma simulação, tais que L1 Cache é mais próxima da CPU, rápida,
          armazena dados e instruções frequentes. L2 Cache está entre L1 e
          memória principal, maior e mais lenta, compartilhada entre núcleos.
          Ambas melhoram o desempenho ao reduzir o tempo de acesso à memória
          principal, explorando o princípio da localidade.
        </p>

        <Button text="Voltar" link="/memory/first-section" isBack />
        <Button text="Continuar!" link="/memory/third-section" />
      </div>
    </div>
  );
};
