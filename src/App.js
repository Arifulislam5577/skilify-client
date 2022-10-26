import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Routes";

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
