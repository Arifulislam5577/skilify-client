import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-5 items-center lg:justify-between justify-center lg:text-left text-center lg:mt-0 mt-10">
          <div className="lg:col-span-1 w-full ">
            <h1 className="font-bold lg:text-5xl text-3xl lg:max-w-md lg:pr-7 tracking-wide">
              Turn your ambiton into a success story
            </h1>
            <p className="text-gray-600 lg:max-w-md my-5">
              Choose from over 100,000 online video courses with new additions
              published every mont.
            </p>

            <Button>get started</Button>
          </div>
          <div className="p-5 lg:col-span-1 w-full mx-auto">
            <img
              src="https://images.unsplash.com/photo-1519205196298-7fc29cb73b3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="learner"
              className="rounded-tl-[10rem] rounded-br-[10rem] p-5 bg-white mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
