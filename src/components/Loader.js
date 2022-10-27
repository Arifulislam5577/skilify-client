import React from "react";

const Loader = () => {
  return (
    <section className=" min-h-screen flex items-center justify-center">
      <div className="spinner">
        <img src="images/spinner.svg" alt="spinner" />
      </div>
    </section>
  );
};

export default Loader;
