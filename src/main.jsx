import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource-variable/montserrat";
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Quiz from "./pages/Quiz.jsx";
import QuizResult from "./pages/QuizResult.jsx";
import Tips from "./pages/Tips.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/quizresult",
    element: <QuizResult />,
  },
  {
    path: "/tips",
    element: <Tips />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
