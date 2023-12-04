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
import { ArchitectureThird } from "./components/layouts/architecture/ArchitectureThird.js";
import { ArchitectureFourth } from "./components/layouts/architecture/ArchitectureFourth.js";
import { MemoryThird } from "./components/layouts/memory/MemoryThird.js";
import { PipelineFirstSection } from "./components/layouts/pipeline/PipelineFirst.js";
import { PipelineSecondSection } from "./components/layouts/pipeline/PipelineSecond.js";
import { PipelineThirdSection } from "./components/layouts/pipeline/PipelineThird.js";
import { PipelineFourthSection } from "./components/layouts/pipeline/PipelineFourth.js";

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
          { path: "second-section", element: <PipelineSecondSection /> },
          { path: "third-section", element: <PipelineThirdSection /> },
          { path: "fourth-section", element: <PipelineFourthSection /> },
        ],
      },
      {
        path: "memory",
        element: <BasicLayout />,
        children: [
          { path: "first-section", element: <Fragment /> },
          { path: "second-section", element: <Fragment /> },
          { path: "third-section", element: <MemoryThird /> },
          { path: "fourth-section", element: <Fragment /> },
        ],
      },
      {
        path: "hierarch",
        element: <BasicLayout />,
        children: [
          { path: "first-section", element: <Fragment /> },
          { path: "second-section", element: <Fragment /> },
          { path: "third-section", element: <Fragment /> },
          { path: "fourth-section", element: <Fragment /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
