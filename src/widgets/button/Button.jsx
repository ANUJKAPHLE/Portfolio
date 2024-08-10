import React from "react";
import { twMerge } from "tailwind-merge";

const Button = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      {...rest}
      className={twMerge("px-7 border-2 border-black", className)}
    >
      {children}
    </button>
  );
};

export default Button;
