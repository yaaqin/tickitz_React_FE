import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./page/home";
import Detail from "./page/detail";
import Register from "./page/register"
import Login from "./page/login";
import ChooseSeat from "./page/ChooseSeat";
import Movie from "./page/movie";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/choose-seat/:id",
    element: <ChooseSeat />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/movie",
    element: <Movie />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
