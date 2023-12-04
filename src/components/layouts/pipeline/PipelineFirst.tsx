import Button from "../../button/Button";

export function PipelineFirstSection() {
  return (
    <>
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
            Pipeline
            <br></br>
            <br></br>
            Nesta seção você irá visualizar as vantagens de se utilizar o
            conceito chamado de Pipeline, que consiste, basicamente, em uma
            distribuição mais otimizada das instruções a serem executadas pelo
            processador.
          </p>
        </div>
      </div>
      <Button text="Voltar" link="/architecture/fourth-section" isBack />
      <Button text="Próximo" link="/pipeline/second-section" />
    </>
  );
}
