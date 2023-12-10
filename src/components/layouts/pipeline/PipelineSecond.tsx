import { BasicContent } from "../../basic-content/BasicContent";
import Button from "../../button/Button";

export function PipelineSecond() {
  return (
    <BasicContent>
      <p style={{ fontSize: "1.8rem" }}>
        Vamos imaginar que você trabalhe em uma lavanderia. No início do dia 4
        clientes chegam à loja deixando suas roupas. Sabendo que o processo
        completo consiste em lavar, secar, dobrar e empacotar, como você faria
        para terminar as quatro levas de roupa no menor tempo possível?<br></br>
        Uma possibilidade é lavar, secar, dobrar e empacotar as roupas do
        cliente 1 e então, ao finalizá-las, iniciar o mesmo processo para o
        cliente 2. Mas quando você tira as roupas do cliente 1 da máquina de
        lavar e continua seguindo o processo, a máquina de lavar fica ociosa
        enquanto você seca, dobra e empacota essa leva de roupas.<br></br>
        <br></br>E se, ao tirar as roupas do cliente 1 da lavadora, já colocar
        as roupas do cliente 2 nela? E então, quando as roupas do 1 saíssem da
        secadora, as roupas do 2 estariam prontas para iniciar a secagem, e
        assim consecutivamente. É nessa analogia que se baseia o conceito de
        Pipeline. As etapas a serem executadas nesse caso são: busca da
        instrução, decodificação da instrução, execução, acesso à memória e
        escrita de volta. Quando a busca da primeira é finalizada, já se pode
        iniciar a busca da segunda. Quando a decodificação da primeira é
        finalizada, se inicia a decodificação da segunda e busca da terceira.
        <br></br>
        <br></br>
        Dessa forma é possível ganhar bastante tempo, observe no proximo slide -
        {">"}
      </p>

      <Button text="Voltar" link="/pipeline/first-section" isBack />
      <Button text="Próximo" link="/pipeline/third-section" />
    </BasicContent>
  );
}
