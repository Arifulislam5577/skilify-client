import React from "react";

const CourseChoice = () => {
  return (
    <section className="course-choice py-10 bg-light">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="max-w-md text-3xl font-bold capitalize">
            get choice of your course
          </h2>
          <button className="py-2 px-5 bg-secondary text-white  rounded-tl-xl rounded-br-xl shadow">
            view all
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseChoice;
