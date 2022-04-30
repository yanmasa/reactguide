import React from "react";

export const ColorfulMessage = (props) => {
  const { color, message } = props;
  const style = {
    color,
    fontSize: "18px"
  };
  return <p style={style}>{message}</p>;
};
