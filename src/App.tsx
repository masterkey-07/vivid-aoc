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
          { path: "first-section", element: <IntroductionFirst/>},
          { path: "second-section", element: <IntroductionSecond/> },
          { path: "third-section", element: <IntroductionThird/> },
          { path: "fourth-section", element: <IntroductionFourth/>},
        ],
      },
      {
        path: "architecture",
        element: <BasicLayout />,
        children: [
          { path: "first-section" },
          { path: "second-section" },
          { path: "third-section" },
          { path: "fourth-section" },
        ],
      },
      {
        path: "pipeline",
        element: <BasicLayout />,
        children: [
          { path: "first-section" },
          { path: "second-section" },
          { path: "third-section" },
          { path: "fourth-section" },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
