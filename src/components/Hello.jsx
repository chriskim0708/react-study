import React from "react";

function Hello({ children, message, name, color, fontWeight, onClick }) {
  return (
    <div onClick={() => onClick()}>
      {message} <span style={{ color, fontWeight }}>{name}</span>
      {children}
    </div>
  );
}

Hello.defaultProps = {
  color: "red",
  onClick: () => {}
};

export default Hello;
