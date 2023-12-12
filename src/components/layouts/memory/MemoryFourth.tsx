import Button from "../../button/Button";
import { BasicContent } from "../../basic-content/BasicContent";
import { Question, QuizForm } from "../../quiz-form/QuizForm";

export const MemoryFourth = () => {
  const memoryQuestions: Question[] = [
    {
      question:
        "Qual é o principal objetivo do uso de memória cache em um sistema de computador?",
      answers: [
        "Aumentar o tamanho da memória principal.",
        "Reduzir o custo dos computadores.",
        "Acelerar o acesso aos dados frequentemente usados.",
        "Armazenar permanentemente os programas.",
        "Aumentar o tamanho da RAM.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        "Como a localidade espacial e temporal é importante par o desempenho da memória cache?",
      answers: [
        "Não afeta o desempenho da memória cache.",
        "Reduz a capacidade da memória cache.",
        "Aumenta a latência da memória cache.",
        "Melhora a eficiência da memória cache",
        "Torna a memória cache mais cara.",
      ],
      correctAnswerIndex: 3,
    },
  ];

  return (
    <BasicContent>
      <QuizForm questions={memoryQuestions} title="Quiz sobre Memoria" />
      <Button text="Voltar" link="/memory/third-section" isBack />
    </BasicContent>
  );
};
