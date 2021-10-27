import React, { useState, useReducer } from "react";

function reducer(state, action) {
  const { number, type } = action;
  switch (type) {
    case "INCREASE": {
      return state + number;
    }
    case "DECREASE": {
      return state - number;
    }
    default: {
      return state;
    }
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({
      type: "INCREASE",
      number: 3
    });
  };
  const onDecrease = () => {
    dispatch({
      type: "DECREASE",
      number: 2
    });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
