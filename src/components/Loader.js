import React from "react";

const Loader = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="spinner">
        <img
          src="https://res.cloudinary.com/arif5577/image/upload/v1666844850/Skilify/spinner_zvhxfh.svg"
          alt="spinner"
        />
      </div>
    </section>
  );
};

export default Loader;
