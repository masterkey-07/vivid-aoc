import Button from "../../button/Button";

export function PipelineThirdMeio() {
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
           <p style={{ 
          fontWeight: "bold",
          fontSize: "2rem",
          color: '#3C486B',
        }}>
            E se, ao tirar as roupas do cliente 1 da lavadora, já colocar as
            roupas do cliente 2 nela? E então, quando as roupas do 1 saíssem da
            secadora, as roupas do 2 estariam prontas para iniciar a secagem, e
            assim consecutivamente. É nessa analogia que se baseia o conceito de
            Pipeline. As etapas a serem executadas nesse caso são: busca da
            instrução, decodificação da instrução, execução, acesso à memória e
            escrita de volta. Quando a busca da primeira é finalizada, já se
            pode iniciar a busca da segunda. Quando a decodificação da primeira
            é finalizada, se inicia a decodificação da segunda e busca da
            terceira.<br></br><br></br>
            Dessa forma é possível ganhar bastante tempo, observe:
          </p>
        </div>
    </div>
      <Button text="Próximo" link="/pipeline/third-section" />
    </>
  );
}
