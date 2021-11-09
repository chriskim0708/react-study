import React from "react";
import classNames from "classnames";

function Button({ text, size, color, outline, ...rest }) {
  return (
    <button
      className={classNames("Button", size, color, { outline })}
      {...rest}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue"
};

export default Button;
