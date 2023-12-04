import Button from "../../button/Button";

export function PipelineSecondSection() {
  return (
    <>
      <section
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            marginTop: "5rem",
            backgroundColor: "#ffffff7c",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              color: "#3C486B",
              marginBottom: "1rem",
            }}
          >
            Vamos imaginar que você trabalhe em uma lavanderia. No início do dia
            4 clientes chegam à loja deixando suas roupas. Sabendo que o
            processo completo consiste em lavar, secar, dobrar e empacotar, como
            você faria para terminar as quatro levas de roupa no menor tempo
            possível?
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#3C486B",
              marginBottom: "1rem",
            }}
          >
            Uma possibilidade é lavar, secar, dobrar e empacotar as roupas do
            cliente 1 e então, ao finalizá-las, iniciar o mesmo processo para o
            cliente 2. Mas quando você tira as roupas do cliente 1 da máquina de
            lavar e continua seguindo o processo, a máquina de lavar fica ociosa
            enquanto você seca, dobra e empacota essa leva de roupas.
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#3C486B",
              marginBottom: "1rem",
            }}
          >
            E se, ao tirar as roupas do cliente 1 da lavadora, já colocar as
            roupas do cliente 2 nela? E então, quando as roupas do 1 saíssem da
            secadora, as roupas do 2 estariam prontas para iniciar a secagem, e
            assim consecutivamente. É nessa analogia que se baseia o conceito de
            Pipeline. As etapas a serem executadas nesse caso são: busca da
            instrução, decodificação da instrução, execução, acesso à memória e
            escrita de volta. Quando a busca da primeira é finalizada, já se
            pode iniciar a busca da segunda. Quando a decodificação da primeira
            é finalizada, se inicia a decodificação da segunda e busca da
            terceira.
          </p>
          <p style={{ fontSize: "1.2rem", color: "#3C486B" }}>
            Dessa forma é possível ganhar bastante tempo, observe:
          </p>
        </div>
      </section>
      <Button text="Próximo" link="/pipeline/third-section" />
    </>
  );
}
