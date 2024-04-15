import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[30px]",
};
const variants = {
  gradient: {
    gray_900_01_blue_800: "bg-gradient text-white-A700",
  },
  fill: {
    gray_900_01: "bg-gray-900_01 text-white-A700",
    blue_800: "bg-blue-800 text-white-A700",
  },
};
const sizes = {
  md: "h-[78px] px-[30px] text-[39px]",
  lg: "h-[90px] pl-[30px] pr-[35px] text-[25px]",
  sm: "h-[60px] px-5",
  xs: "h-[60px] px-[35px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["md", "lg", "sm", "xs"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf(["gray_900_01_blue_800", "gray_900_01", "blue_800"]),
};

export { Button };
