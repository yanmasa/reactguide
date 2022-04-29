import React from "react";

const ColorFulMessage = (promps) => {
  const { color, message } = promps;
  const style = {
    color,
    fontSize: "18px"
  };
  console.log(promps);
  return <p style={style}>{message}</p>;
};

export default ColorFulMessage;
