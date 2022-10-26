import React, { useContext } from "react";
import { DataContext } from "../context/context";

const Courses = () => {
  const { loading, error, data } = useContext(DataContext);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>{error}</h1>;
  }
  return <div>{data.length}</div>;
};

export default Courses;
