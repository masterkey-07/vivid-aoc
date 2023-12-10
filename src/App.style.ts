import styled, { createGlobalStyle } from "styled-components";
import GalaxyImage from "./assets/galaxy.png";

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: rgba(62, 73, 105, 255);

  background-image: url(${GalaxyImage});
  background-repeat: no-repeat;
  background-size: 100%;

  &::before {
    content: "";
    position: absolute;
    height: 100vh;
    width: 100vw;

    backdrop-filter: saturate(0.4);
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  :root{
    --gold :#ffe81f;
  }
`;
