import { Fragment, useState } from "react";
import { Bold } from "../basic-content/BasicContent";
import styled from "styled-components";

export type Question = {
  question: string;
  answers: [string, string, string, string, string];
  correctAnswerIndex: 0 | 1 | 2 | 3 | 4 | 5;
};

type QuizFormProps = {
  title: string;
  questions: Question[];
};

type AnswerOptionProps = {
  answer: string;
  selected: boolean;
  onSelection: () => void;
  isAnswer: boolean;
  check: boolean;
};

const RadioButton = styled.div<{ selected: boolean }>`
  width: 1rem;
  height: 1rem;
  border: 3px solid white;
  border-radius: 100%;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 0.4rem;
    height: 0.4rem;

    left: 50%;
    top: 50%;

    border-radius: 100%;

    transform: translate(-50%, -50%);

    background-color: ${({ selected }) => (selected ? "white" : "")};
  }
`;

const ConfirmButton = styled.button`
  margin-left: 100%;
  transform: translateX(-100%);
  width: 20rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: 2px solid white;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 12px;

  &:hover {
    box-shadow: 0 0 10px 0 white;
  }

  transition: 50ms ease-in-out;

  user-select: none;

  &:active {
    transition-duration: 0;
    box-shadow: 0 0 20px 0 white;
  }
`;

const AnswerOption = ({
  answer,
  selected,
  onSelection,
  check,
  isAnswer,
}: AnswerOptionProps) => {
  const isError = selected && !isAnswer;
  const isSuccess = isAnswer;

  return (
    <div
      onClick={onSelection}
      style={{
        fontSize: "1.8rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        color: check
          ? isSuccess
            ? "rgb(100,255,100)"
            : isError
            ? "rgb(255,100,100)"
            : "white"
          : "white",
      }}
    >
      <RadioButton selected={selected} />
      <label style={{ userSelect: "none" }}> {answer}</label>
    </div>
  );
};

const QuestionForm = ({
  question,
  isLast,
  check,
}: {
  question: Question;
  isLast: boolean;
  check: boolean;
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>();

  return (
    <Fragment>
      <div style={{ margin: "1rem 0" }}>
        <h6 style={{ textAlign: "left" }}>{question.question}</h6>
        <div
          style={{
            marginTop: "1rem",
            marginLeft: "2rem",
            display: "flex",
            flexFlow: "column",
            alignItems: "flex-start",
          }}
        >
          {question.answers.map((answer, index) => (
            <AnswerOption
              onSelection={() => !check && setSelectedIndex(index)}
              selected={selectedIndex === index}
              answer={answer}
              isAnswer={index === question.correctAnswerIndex}
              check={check}
            />
          ))}
        </div>
      </div>
      {!isLast && <hr />}
    </Fragment>
  );
};

export const QuizForm = ({ questions, title }: QuizFormProps) => {
  const [isCheck, seIsCheck] = useState(false);

  return (
    <div style={{ userSelect: "none" }}>
      <Bold>{title}</Bold>
      {questions.map((question, index) => (
        <QuestionForm
          check={isCheck}
          isLast={index + 1 === questions.length}
          question={question}
        />
      ))}

      <ConfirmButton onClick={() => seIsCheck(true)}>
        Conferir Respostas
      </ConfirmButton>
    </div>
  );
};
