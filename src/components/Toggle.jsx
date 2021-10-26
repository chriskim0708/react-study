import React, { useEffect, useRef, useState } from "react";

function Toggle({ visible, view }) {
  const dom = useRef();
  const [count, setCount] = useState(0);
  const [text, setText] = useState("a");
  useEffect(() => {
    console.log("컴포넌트 마운트");
    console.log(count);
    console.log(text);
  }, []);
  const onClick = () => {
    console.log(dom);
    setCount(count + 1);
    setText("b");
  };
  return (
    <div ref={dom} onClick={onClick}>
      toggle {count} {text}
    </div>
  );
}

export default Toggle;
