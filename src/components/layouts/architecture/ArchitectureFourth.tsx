import Button from "../../button/Button";
import { BasicContent } from "../../basic-content/BasicContent";
import { Question, QuizForm } from "../../quiz-form/QuizForm";

const architectureQuestions: Question[] = [
  {
    question: "Qual é a principal função dos registradores na CPU?",
    correctAnswerIndex: 3,
    answers: [
      "Armazenar permanentemente os programas.",
      "Realizar operações matemáticas complexas.",
      "Controlar a execução de programas.",
      "Armazenar dados temporariamente.",
      "Gerar endereços de memória.",
    ],
  },
  {
    question:
      "O que é a Unidade de Controle (UC) na CPU e qual é a sua função principal?",
    answers: [
      "Coordenar os demais componentes da CPU.",
      "Realizar operações lógicas e aritméticas.",
      "Armazenar dados permanentemente.",
      "Controlar a exibição de vídeos.",
      "Armazenar instruções do sistema operacional.",
    ],
    correctAnswerIndex: 0,
  },
];

export const ArchitectureFourth = () => {
  return (
    <BasicContent>
      <QuizForm title="Quiz de Arquitetura" questions={architectureQuestions} />
      <Button text="Voltar" link="/architecture/third-section" isBack />
      <Button text="Continuar!" link="/pipeline/first-section" />
    </BasicContent>
  );
};
