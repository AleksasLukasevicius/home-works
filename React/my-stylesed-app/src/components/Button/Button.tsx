import React from "react";

export const Button = () => {
  const buttonStyle = {
    marginLeft: 200,
    width: 100,
    padding: 10,
    backgroundColor: "red",
  };

  return (
    <div style={buttonStyle}>
      <p style={{ color: "black" }}>Button Bla Bla Bla</p>
    </div>
  );
};
