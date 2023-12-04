import Button from "../../button/Button";

export function PipelineSecond() {
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
              fontSize: "2rem",
              color: "#3C486B",
            }}
          >
            Vamos imaginar que você trabalhe em uma lavanderia. No início do dia
            4 clientes chegam à loja deixando suas roupas. Sabendo que o
            processo completo consiste em lavar, secar, dobrar e empacotar, como
            você faria para terminar as quatro levas de roupa no menor tempo
            possível?<br></br>
            Uma possibilidade é lavar, secar, dobrar e empacotar as roupas do
            cliente 1 e então, ao finalizá-las, iniciar o mesmo processo para o
            cliente 2. Mas quando você tira as roupas do cliente 1 da máquina de
            lavar e continua seguindo o processo, a máquina de lavar fica ociosa
            enquanto você seca, dobra e empacota essa leva de roupas.<br></br><br></br>
          </p>
        </div>
    </div>
      <Button text="Próximo" link="/pipeline/thirdmeio-section" />
    </>
  );
}
