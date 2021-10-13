import React from "react";

function Text({ isVisible }) {
  return isVisible ? <p>Text test!!!</p> : null;
}

export default Text;
