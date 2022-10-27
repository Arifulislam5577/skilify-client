import React from "react";

const Faq = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="w-full lg:w-2/3 mx-auto">
          <figure className="mb-4">
            <h2 className="p-2 border-l-2 border-l-secondary bg-primary font-semibold text-gray-600 mb-2">
              What is Skilify?
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Skilly is a online learning platform. Anyone can learn there
              favourite topic from our website. It is not free,but we have two
              premium package for our customers. One is course base and other is
              monthly package. if you enroll a course you can see only this
              course,but if anyone subscribe our monthly package he/she can
              access all the courses. So why are you waiting for? Let's get
              started.
            </p>
          </figure>
          <figure className="mb-4">
            <h2 className="p-2 border-l-2 border-l-secondary bg-primary font-semibold text-gray-600 mb-2">
              How many package available for customers?
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              We have two premium package for our customers. One is course base
              and other is monthly package. if you enroll a course you can see
              only this course,but if anyone subscribe our monthly package
              he/she can access all the courses.
            </p>
          </figure>

          <figure className="mb-4">
            <h2 className="p-2 border-l-2 border-l-secondary bg-primary font-semibold text-gray-600 mb-2">
              Can I dawnload courses video?
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              No,You can not dawnload courses video
            </p>
          </figure>
          <figure className="mb-4">
            <h2 className="p-2 border-l-2 border-l-secondary bg-primary font-semibold text-gray-600 mb-2">
              Can I get special offer for buy course?
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Yeah, Please subcribe our newsletter,we will let you know via
              email.
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Faq;
