import React from "react";

const sizes = {
  "2xl": "text-[200px] font-bold md:text-5xl",
  xl: "text-[76px] font-bold md:text-5xl",
  s: "text-[39px] font-semibold md:text-[37px] sm:text-[35px]",
  md: "text-[49px] font-bold md:text-[45px] sm:text-[39px]",
  xs: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  lg: "text-[61px] font-bold md:text-5xl",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
