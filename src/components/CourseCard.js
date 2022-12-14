import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div
      className="card lg:col-span-1 w-full overflow-hidden rounded shadow hover:shadow-xl transition-all duration-300 bg-white"
      key={course.id}
    >
      <div className="course-img">
        <Link to={`/course/${course.id}`}>
          <img src={course.coverPhoto} alt="cover" />
        </Link>
      </div>
      <div className="px-5 py-6 bg-white">
        <h2 className="title text-gray-600 text-base mb-2 font-bold hover:text-secondary">
          <Link to={`/course/${course.id}`}>{course.title}</Link>
        </h2>
        <p className="title text-gray-400 text-sm">
          {course.description[0].split(" ").slice(0, 9).join(" ")}...
        </p>
        <div className="flex mt-3 items-center justify-between">
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500 gap-1">
              ๐ฉโ๐ฉโ๐งโ๐ง{course.students}
            </span>
          </div>
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500">
              ๐{course.rating}
            </span>
          </div>
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500">
              ๐ฐ{course.price}
            </span>
          </div>
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500">
              ๐งโ๐ซ{course.instructor}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
