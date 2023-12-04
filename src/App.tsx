import "./App.js";
import { Slider } from "./components/slider/Slider";
import { AppContainer, GlobalStyle } from "./App.style.js";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Moon } from "./components/moon/Moon.js";
import { Fragment } from "react";
import { BasicLayout } from "./components/basic-layout/BasicLayout";
import { IntroductionFirst } from "./components/layouts/introduction/IntroductionFirst";
import { IntroductionSecond } from "./components/layouts/introduction/IntroductionSecond";
import { IntroductionThird } from "./components/layouts/introduction/IntroductionThird";
import { IntroductionFourth } from "./components/layouts/introduction/IntroductionFourth";
import { ArchitectureFirst } from "./components/layouts/architecture/ArchitectureFirst";
import { ArchitectureSecond } from "./components/layouts/architecture/ArchitectureSecond";
import { ArchitectureThird } from "./components/layouts/architecture/ArchitectureThird";
import { ArchitectureFourth } from "./components/layouts/architecture/ArchitectureFourth";
import { PipelineFirstSection } from "./components/layouts/pipeline/PipelineFirst.js";
import { PipelineSecond } from "./components/layouts/pipeline/PipelineSecond";
import { PipelineThirdSection } from "./components/layouts/pipeline/PipelineThird.js";
import { PipelineFourthSection } from "./components/layouts/pipeline/PipelineFourth.js";
import { MemoryFirst } from "./components/layouts/memory/MemoryFirst.js";
import { MemorySecond } from "./components/layouts/memory/MemorySecond.js";
import { MemoryFourth } from "./components/layouts/memory/MemoryFourth.js";
import { MemoryThird } from "./components/layouts/memory/MemoryThird.js";
import { PipelineThirdMeio } from "./components/layouts/pipeline/PipelineThirdMeio.js";

const AppWrapper = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AppContainer>
        <Slider />
        <Outlet />
      </AppContainer>
    </Fragment>
  );
};

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      { path: "", element: <Moon /> },
      {
        path: "introduction",
        element: <BasicLayout />,
        children: [
          { path: "first-section", element: <IntroductionFirst /> },
          { path: "second-section", element: <IntroductionSecond /> },
          { path: "third-section", element: <IntroductionThird /> },
          { path: "fourth-section", element: <IntroductionFourth /> },
        ],
      },
      {
        path: "architecture",
        element: <BasicLayout />,
        children: [
          { path: "first-section", element: <ArchitectureFirst /> },
          { path: "second-section", element: <ArchitectureSecond /> },
          { path: "third-section", element: <ArchitectureThird /> },
          { path: "fourth-section", element: <ArchitectureFourth /> },
        ],
      },
      {
        path: "pipeline",
        element: <BasicLayout />,
        children: [
          { path: "first-section", element: <PipelineFirstSection /> },
          { path: "second-section", element: <PipelineSecond /> },
          { path: "thirdmeio-section", element: <PipelineThirdMeio /> },
          { path: "third-section", element: <PipelineThirdSection /> },
          { path: "fourth-section", element: <PipelineFourthSection /> },
        ],
      },
      {
        path: "memory",
        element: <BasicLayout />,
        children: [
          { path: "first-section", element: <MemoryFirst /> },
          { path: "second-section", element: <MemorySecond /> },
          { path: "third-section", element: <MemoryThird /> },
          { path: "fourth-section", element: <MemoryFourth /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
