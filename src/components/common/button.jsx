import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  padding = "10px 20px",
  backgroundColor = "#AD1AAF",
  textColor = "white",
  borderColor = "none",
  children,
  onClick = () => {},
}) => {
  const buttonStyle = {
    padding: padding,
    backgroundColor: backgroundColor,
    color: textColor,
    border: borderColor,
  };

  return (
    <button
      style={buttonStyle}
      className="center gap-2 rounded-md text-[.8rem] focus:outline-none capitalize font-bold hover:scale-95 transition duration-300 oxanium w-full"
      onClick={onClick}
      id="accountId"
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default CustomButton;