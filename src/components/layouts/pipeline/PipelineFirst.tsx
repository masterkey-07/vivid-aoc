import Button from "../../button/Button";

export function PipelineFirstSection() {
  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyItems: "center",
          placeItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff7c",
            padding: "2rem",
            width: "80%",
            height: "200px",
            marginTop: "10rem",
            borderRadius: "10px",
          }}
        >
          <h1
            style={{
              marginBottom: "2rem",
              color: "#3C486B",
            }}
          >
            Pipeline
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#3C486B",
              marginBottom: "1rem",
            }}
          >
            Nesta seção você irá visualizar as vantagens de se utilizar o
            conceito chamado de Pipeline, que consiste, basicamente, em uma
            distribuição mais otimizada das instruções a serem executadas pelo
            processador.
          </p>
        </div>
      </section>
      <Button text="Próximo" link="/pipeline/second-section" />
    </>
  );
}
