import React, { useState } from 'react';
import Button from '../../button/Button';

export const ArchitectureFourth = () => {
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
  });

  const checkAnswers = () => {
    setAnswers({
      ...answers,
      question1: 'D',
      question2: 'A',
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '50%', 
          border: '2px solid white',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
        }}
      >

        <h2 style={{ fontSize: '3rem', color: '#3C486B' }}>Quiz</h2>
        <div style={{ marginTop: '30px', textAlign: 'left' }}>
          <p style={{ fontSize: '2rem', color: '#3C486B', textAlign: 'left' }}>
            Pergunta 1: Qual é a principal função dos registradores na CPU?
          </p>
          <br>
          </br>
          <form>
          <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
          <input
                type="radio"
                value="A"
                checked={answers.question1 === 'A'}
                onChange={() => setAnswers({ ...answers, question1: 'A' })}
              />
              A) Armazenar permanentemente os programas.
            </label><br />
            <br></br>
            <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              <input
                type="radio"
                value="B"
                checked={answers.question1 === 'B'}
                onChange={() => setAnswers({ ...answers, question1: 'B' })}
              />
              B) Realizar operações matemáticas complexas.
            </label><br /><br></br>
            <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              <input
                type="radio"
                value="C"
                checked={answers.question1 === 'C'}
                onChange={() => setAnswers({ ...answers, question1: 'C' })}
              />
              C) Controlar a execução de programas.
            </label><br /><br></br>
            <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              <input
                type="radio"
                value="D"
                checked={answers.question1 === 'D'}
                onChange={() => setAnswers({ ...answers, question1: 'D' })}
              />
          D) Armazenar dados temporariamente.
            </label><br /><br></br>
            <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              <input
                type="radio"
                value="E"
                checked={answers.question1 === 'E'}
                onChange={() => setAnswers({ ...answers, question1: 'E' })}
              />
              E) Gerar endereços de memória.
            </label>
          </form>

<br></br>
          <p style={{ fontSize: '2rem', marginTop: '20px', color: '#3C486B', textAlign: 'left' }}>
            Pergunta 2: O que é a Unidade de Controle (UC) na CPU e qual é a sua função principal?
          </p>
          <br></br>
          <form>
          <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              <input
                type="radio"
                value="A"
                checked={answers.question2 === 'A'}
                onChange={() => setAnswers({ ...answers, question2: 'A' })}
              />
              A) Coordenar os demais componentes da CPU.
            </label><br /><br></br>
            <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              <input
                type="radio"
                value="B"
                checked={answers.question2 === 'B'}
                onChange={() => setAnswers({ ...answers, question2: 'B' })}
              />
          B) Realizar operações lógicas e aritméticas.
            </label><br /><br></br>
            <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              <input
                type="radio"
                value="C"
                checked={answers.question2 === 'C'}
                onChange={() => setAnswers({ ...answers, question2: 'C' })}
              />
              C) Armazenar dados permanentemente.
            </label><br /><br></br>
            <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              <input
                type="radio"
                value="D"
                checked={answers.question2 === 'D'}
                onChange={() => setAnswers({ ...answers, question2: 'D' })}
              />
          D) Controlar a exibição de vídeos.
            </label><br /><br></br>
            <label style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              <input
                type="radio"
                value="E"
                checked={answers.question2 === 'E'}
                onChange={() => setAnswers({ ...answers, question2: 'E' })}
              />
              E) Armazenar instruções do sistema operacional.
            </label>
          </form>
        </div>
        <br></br>
        {answers.question1 !== null && answers.question2 !== null && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '2rem', color: '#3C486B' }}>
              Respostas:
            </p>
            <p style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              Pergunta 1: {answers.question1 === 'D' ? 'Correta' : 'Incorreta'}
            </p>
            <p style={{ fontSize: '1.7rem', color: '#3C486B', textAlign: 'left' }}>
              Pergunta 2: {answers.question2 === 'A' ? 'Correta' : 'Incorreta'}
            </p>
          </div>
        )}
        <Button text="Continuar!" link="" />
      </div>
    </div>
  );
};