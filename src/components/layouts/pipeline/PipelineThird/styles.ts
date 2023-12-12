import styled from "styled-components";

export const SimulationContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  height: 65vh;
`;

export const SimulationHeader = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 18rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border: 2px solid white;
    padding: 0.75rem;
    font-size: 1.8rem;
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
  }
`;

export const Simulation = styled.div`
  font-size: 1.2rem;
  display: grid;

  grid-template-columns: repeat(20, 1fr);

  justify-content: start;

  div {
    border-right: 1px solid white;
    height: 3.2rem;
    width: 100%;
  }

  img {
    height: 3.2rem;
    width: 100%;
  }
`;
