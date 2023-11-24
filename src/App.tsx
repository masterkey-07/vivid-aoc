import "./App.css";
import { Moon } from "./components/Moon";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div className="app-container">
      <Slider />
      <Moon />
    </div>
  );
}

export default App;
