import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const CourseDatails = () => {
  const { data } = useLoaderData();
  const {
    title,
    description,
    price,
    students,
    rating,
    instructor,
    coverPhoto,
  } = data;
  return (
    <section className="">
      <div className="py-10 bg-light text-center">
        <h2 className="text-2xl tracking-wide font-bold text-gray-600 capitalize">
          {title}
        </h2>
        <div className="flex mt-3 items-center justify-center lg:gap-10 gap-5">
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500 gap-1">
              👩‍👩‍👧‍👧{students}
            </span>
          </div>
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500">
              🌟{rating}
            </span>
          </div>
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500">
              💰{price}
            </span>
          </div>
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500">
              🧑‍🏫{instructor}
            </span>
          </div>
          <div>
            <button className="text-xs flex items-center gap-1 text-gray-500">
              ⬇️Dawnload Content
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="p-5">
          <img src={coverPhoto} alt={title} />
          <h4 className="text-xl font-bold text-gray-600 mt-5">Description</h4>

          {description.map((detial, index) => (
            <p className="mb-3 mt-5 text-justify" key={index}>
              {detial}
            </p>
          ))}

          <Link
            to="/checkout"
            className="py-2 px-5 bg-secondary text-white  rounded-tl-xl rounded-br-xl shadow hover:translate-y-1 duration-300 transition-all capitalize text-sm my-5 inline-block"
          >
            Get premium access
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseDatails;
