import React, { useState } from 'react';
import Button from '../../button/Button';
import suaImagem from '../../../assets/architecture.png';

export const ArchitectureThird = () => {
  const [tooltips, setTooltips] = useState({
    tooltip1: false,
    tooltip2: false,
    tooltip3: false,
    tooltip4: false,
  });

  const handleTooltipClick = (tooltipKey) => {
    setTooltips((prevTooltips) => ({
      ...prevTooltips,
      [tooltipKey]: !prevTooltips[tooltipKey],
    }));
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
          position: 'relative',
          width: '60%',
          border: '2px solid white',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <img
          src={suaImagem}
          alt="Arquitetura Multi-Cycle"
          style={{
            width: '100%',
            height: 'auto',
            marginBottom: '20px',
            position: 'relative',
          }}
        />
        {/* Bolinha 1 */}
        <div
          onClick={() => handleTooltipClick('tooltip1')}
          style={{
            position: 'absolute',
            top: '10%',
            left: '38%',
            width: '150px',
            height: '170px',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            border: '5px solid red',
            cursor: 'pointer',
          }}
        />
        {tooltips.tooltip1 && (
          <div
            style={{
              position: 'absolute',
              top: '3%',
              left: '52%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '10px',
              borderRadius: '5px',
              width: '300px',
            }}
          >
            A Unidade de Controle (UC) é o componente central responsável por coordenar e controlar todas as operações na CPU MIPS multiciclo.
            Ela gera sinais de controle precisos para direcionar os vários estágios de execução de instruções, garantindo que as operações sejam executadas em ciclos de clock específicos.
            A UC também desempenha um papel fundamental na seleção dos caminhos de dados corretos durante a execução das instruções MIPS multiciclo, garantindo que os sinais adequados sejam enviados aos multiplexadores nos momentos apropriados.
          </div>
        )}

        {/* Bolinha 2 */}
        <div
          onClick={() => handleTooltipClick('tooltip2')}
          style={{
            position: 'absolute',
            top: '42.5%',
            left: '66%',
            width: '150px',
            height: '150px',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            border: '5px solid red',
            cursor: 'pointer',
          }}
        />
        {tooltips.tooltip2 && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '76%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '10px',
              borderRadius: '5px',
              width: '300px',
            }}
          >
            A ALU no MIPS multiciclo é responsável por realizar operações aritméticas e lógicas nas instruções.
            Durante a execução de instruções, a UC coordena o uso da ALU nos estágios apropriados do pipeline multiciclo para realizar as operações necessárias.
            A ALU desempenha um papel central na realização de cálculos e na manipulação de dados de acordo com as instruções MIPS multiciclo.

          </div>
        )}
          
          {/* Bolinha 3 */}
          <div
          onClick={() => handleTooltipClick('tooltip3')}
          style={{
            position: 'absolute',
            top: '41.5%',
            left: '44.5%',
            width: '180px',
            height: '180px',
            backgroundColor: 'transparent',
            border: '5px solid red',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        />
        {tooltips.tooltip3 && (
          <div
            style={{
              position: 'absolute',
              top: '55%',
              left: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '10px',
              borderRadius: '5px',
              width: '300px',
            }}
          >
            Os registradores são unidades de armazenamento de alta velocidade dentro da CPU MIPS multiciclo, usados para armazenar dados temporariamente durante o processamento de instruções.
            Eles desempenham um papel crucial nas operações de leitura, escrita e manipulação de dados durante os diferentes estágios da execução de instruções no MIPS multiciclo.
            Os registradores incluem o Registro de Dados (ou acumulador), o Registro de Endereço, o Registro de Status e outros que são usados em várias instruções.

          </div>
        )}

        {/* Bolinha 4 */}
        <div
          onClick={() => handleTooltipClick('tooltip4')}
          style={{
            position: 'absolute',
            top: '37%',
            left: '4.8%',
            width: '100px',
            height: '100px',
            backgroundColor: 'transparent',
            border: '5px solid red',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        />
        {tooltips.tooltip4 && (
          <div
            style={{
              position: 'absolute',
              top: '39%',
              left: '11%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '10px',
              borderRadius: '5px',
              width: '300px',
            }}
          >
            O Contador de Programa (PC) em uma CPU MIPS multiciclo mantém o endereço da próxima instrução a ser buscada na memória.
            A UC controla o PC, garantindo que ele seja atualizado corretamente durante cada ciclo de clock para seguir a sequência de execução das instruções.
            O PC é essencial para garantir a execução ordenada das instruções em um pipeline de múltiplos ciclos.
          </div>
        )}
        <Button text="Continuar!" link="/architecture/fourth-section" />
      </div>
    </div>
  );
};
