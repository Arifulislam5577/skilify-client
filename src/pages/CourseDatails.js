import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDatails = () => {
  const { data } = useLoaderData();

  return <div>{data.title}</div>;
};

export default CourseDatails;
