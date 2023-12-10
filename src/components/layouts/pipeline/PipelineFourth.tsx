import { useState } from "react";
import Button from "../../button/Button";
import { Question, QuizForm } from "../../quiz-form/QuizForm";
import { BasicContent } from "../../basic-content/BasicContent";

export const PipelineFourthSection = () => {
  const pipelineQuestions: Question[] = [
    {
      question: "Qual é a principal vantagem de um pipeline em um processador?",
      correctAnswerIndex: 3,
      answers: [
        "Aumento da complexidade do processador.",
        "Redução do consumo de energia.",
        "Aumento da latência.",
        "Aumento da velocidade de processamento",
        "Diminuição do tamanho do processador.",
      ],
    },

    {
      question: `Considerando a aplicação do conceito de pipeline na
            nossa analogia, o que pode acontecer se um cliente quiser que a
            etapa de dobra de suas roupas seja pulada (ele não deseja receber as
            roupas dobradas)?`,
      correctAnswerIndex: 2,
      answers: [
        "Atraso na entrega das roupas do cliente.",
        "Necessidade de retrabalho para adicionar a etapa pulada posteriormente.",
        "Possível desperdício de recursos e tempo.",
        "Melhor eficiência no processamento das roupas.",
        "Aumento da velocidade de processamento das roupas.",
      ],
    },
  ];

  return (
    <BasicContent>
      <QuizForm title="Quiz de Pipeline" questions={pipelineQuestions} />
      <Button text="Voltar" link="/pipeline/third-section" isBack />
      <Button text="Continuar!" link="/memory/first-section" />
    </BasicContent>
  );
};
