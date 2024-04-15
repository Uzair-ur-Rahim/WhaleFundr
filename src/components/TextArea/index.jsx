import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[15px]",
};
const variants = {
  tarBlack1: "border-blue-800 border-2 border-solid bg-gray-900_01",
};
const sizes = {
  xs: "h-[180px] p-5",
};

const TextArea = React.forwardRef(
  (
    { className = "", name = "", placeholder = "", shape, size = "xs", variant = "tarBlack1", onChange, ...restProps },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${(shape && shapes[shape]) || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarBlack1"]),
};

export { TextArea };
