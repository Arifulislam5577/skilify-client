import React, { useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Pdf from "react-to-pdf";
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
    id,
  } = data;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/login?redirect=/checkout/${id}`);
  };

  const ref = useRef();

  return (
    <section ref={ref}>
      <div className="py-10 bg-light text-center">
        <h2 className="text-2xl tracking-wide font-bold text-gray-600 capitalize">
          {title}
        </h2>
        <div className="flex mt-3 items-center justify-center lg:gap-10 gap-5">
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500 gap-1">
              ๐ฉโ๐ฉโ๐งโ๐ง{students}
            </span>
          </div>
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500">
              ๐{rating}
            </span>
          </div>
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500">
              ๐ฐ{price}
            </span>
          </div>
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-500">
              ๐งโ๐ซ{instructor}
            </span>
          </div>
          <div>
            <Pdf targetRef={ref} filename={`${title}.pdf`} scale={0.7}>
              {({ toPdf }) => (
                <button
                  onClick={toPdf}
                  className="text-xs flex items-center gap-1 text-gray-500"
                >
                  โฌ๏ธDawnload Content
                </button>
              )}
            </Pdf>
          </div>
        </div>
      </div>
      <div className="container mt-5 lg:w-2/3 mx-auto w-full">
        <div className="p-5">
          <img
            src={coverPhoto}
            alt={title}
            className="h-full w-full rounded-xl"
          />
          <h4 className="text-xl font-bold text-gray-600 mt-5">Description</h4>

          {description.map((detial, index) => (
            <p className="mb-3 mt-5 text-justify" key={index}>
              {detial}
            </p>
          ))}

          <button
            onClick={handleClick}
            className="py-3 px-5 bg-secondary text-white  rounded-tl-xl rounded-br-xl shadow hover:translate-y-1 duration-300 transition-all capitalize text-sm my-5 inline-block"
          >
            Get premium access
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseDatails;
