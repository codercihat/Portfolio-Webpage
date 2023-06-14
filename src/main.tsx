import React from "react";
import ReactDOM from "react-dom/client";
/* import ErrorPage from "./error-page";
import Root from "./routes/root";
import Contact from "./routes/contact"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./MainPage";
import About from "./About";
import Projects from "./Project";
import NewEl from "./newEl";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <NewEl /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  /* {
    path: "/about",
    element: <About />,
  }, 
  {
    path: "/projects",
    element: <Projects />, 
  } */
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
