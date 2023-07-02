import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  { path: "/Home", element: <Home /> },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Navigate to="/Recommend"></Navigate>,
      },

      {
        path: "/Rank",
        element: <Rank />,
      },
      {
        path: "/Recommend",
        element: <Recommend />,
      },
      {
        path: "/Singers",
        element: <Singers />,
      },
    ],
  },
];
