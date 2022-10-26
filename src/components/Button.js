import React from "react";

const Button = ({ children }) => {
  return (
    <button className="py-2 px-5 bg-secondary text-white  rounded-tl-xl rounded-br-xl shadow hover:translate-y-1 duration-300 transition-all capitalize text-sm">
      {children}
    </button>
  );
};

export default Button;
