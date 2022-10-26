import React from "react";
import Button from "./Button";

const CourseChoice = () => {
  return (
    <section className="course-choice py-10 bg-light">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="max-w-md text-3xl font-bold capitalize">
            get choice of your course
          </h2>
          <Button>view all</Button>
        </div>
      </div>
    </section>
  );
};

export default CourseChoice;
