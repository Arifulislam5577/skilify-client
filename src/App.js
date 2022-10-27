import React from "react";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import Router from "./Routes/Routes";

const App = () => {
  return <RouterProvider router={Router} fallbackElement={<Loader />} />;
};

export default App;
