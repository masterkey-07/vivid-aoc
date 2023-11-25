import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: rgba(62, 73, 105, 255);
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
