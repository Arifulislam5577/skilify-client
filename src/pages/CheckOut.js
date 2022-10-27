import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { DataContext } from "../context/context";

const CheckOut = () => {
  const { data } = useLoaderData();
  const { user } = useContext(DataContext);
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
          <div className="lg:col-span-3 w-full">
            <img
              src={data.coverPhoto}
              alt={data.title}
              className="w-full rounded-xl"
            />

            <h1 className="text-2xl font-bold my-5 text-gray-700">
              {data.title}
            </h1>

            {data.description.map((detial, index) => (
              <p className="mb-3 mt-5 text-justify" key={index}>
                {detial}
              </p>
            ))}
          </div>
          <div className="lg:col-span-1 w-full">
            <div className="flex mt-3 items-center justify-center lg:gap-10 gap-5">
              <div className="text-center">
                <span>👩‍👩‍👧‍👧</span>
                <span className="text-sm font-bold mt-1  text-gray-500">
                  {data.students}
                </span>
              </div>
              <div className="text-center">
                <span>🌟</span>
                <span className="text-sm font-bold mt-1  text-gray-500">
                  {data.rating}
                </span>
              </div>
              <div className="text-center">
                <span>💰</span>
                <span className="text-sm font-bold mt-1  text-gray-500">
                  {data.price}
                </span>
              </div>
              <div className="text-center">
                <span>🧑‍🏫</span>
                <span className="text-sm font-bold mt-1  text-gray-500">
                  {data.instructor}
                </span>
              </div>
            </div>
            <div className="my-3 flex items-center justify-between border-t  pt-2.5">
              <p className="text-gray-600 text-sm">Student</p>
              <p className="text-gray-600 text-sm">{user.displayName}</p>
            </div>
            <div className="my-3 flex items-center justify-between border-t  pt-2.5">
              <p className="text-gray-600 text-sm">Price</p>
              <p className="text-gray-600 text-sm">${data.price}</p>
            </div>
            <div className="my-3 flex items-center justify-between border-t  py-2.5">
              <p className="text-gray-600 text-sm">VAT+</p>
              <p className="text-gray-600 text-sm">$0.00</p>
            </div>
            <div className="my-3 flex items-center justify-between border-t  py-2.5">
              <p className="text-gray-600 text-sm">Charge</p>
              <p className="text-gray-600 text-sm">$0.00</p>
            </div>
            <div className="my-3 flex items-center justify-between border-t  py-2.5">
              <p className="text-gray-600 text-sm">Total</p>
              <p className="text-gray-600 text-sm">${data.price}</p>
            </div>
            <div className="my-3 flex items-center justify-center   py-2.5">
              <button className="bg-secondary w-full py-2.5 capitalize text-white rounded">
                enroll now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
