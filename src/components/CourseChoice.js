import React from "react";
import Button from "./Button";

const CourseChoice = () => {
  return (
    <section className="course-choice py-10 bg-light">
      <div className="container">
        <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center">
          <h2 className="lg:max-w-md w-full text-center mb-3 lg:text-left lg:mb-0 lg:text-3xl text-2xl font-bold capitalize">
            get choice of your course
          </h2>
          <Button>view all</Button>
        </div>
      </div>
    </section>
  );
};

export default CourseChoice;
