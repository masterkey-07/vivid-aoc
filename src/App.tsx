import { Fragment } from "react";
import "./App.js";
import { Moon } from "./components/moon/Moon";
import { Slider } from "./components/slider/Slider";
import { AppContainer, GlobalStyle } from "./App.style.js";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppContainer>
        <Slider />
        <Moon />
      </AppContainer>
    </Fragment>
  );
}

export default App;
