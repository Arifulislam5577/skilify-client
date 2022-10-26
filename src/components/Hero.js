import React from "react";

const Hero = () => {
  return (
    <section className="hero bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center justify-between">
          <div>
            <h1 className="font-bold lg:text-5xl text-3xl max-w-md pr-7 tracking-wide">
              Turn your ambiton into a success story
            </h1>
            <p className="text-gray-600 max-w-md my-5">
              Choose from over 100,000 online video courses with new additions
              published every mont.
            </p>

            <button className="py-2 px-5 text-sm bg-secondary text-white capitalize rounded">
              get started
            </button>
          </div>
          <div className="p-5">
            <img
              src="https://images.unsplash.com/photo-1519205196298-7fc29cb73b3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="learner"
              className="rounded  shadow-xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
