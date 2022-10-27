import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";
import { DataContext } from "../context/context";
const Courses = () => {
  const { loading, error, data } = useContext(DataContext);

  return (
    <section className="py-5 bg-primary">
      <div className="container">
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
            <div className="lg:col-span-1 w-full bg-light p-5 rounded">
              <ul>
                {data?.map((item) => (
                  <li className="text-sm text-gray-600 my-5 pl-3 hover:text-secondary hover:translate-x-1 transition-all duration-300">
                    <Link to={`/course/${item.id}`}>✅ {item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {data?.map((course) => {
                return <CourseCard key={course.id} course={course} />;
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
