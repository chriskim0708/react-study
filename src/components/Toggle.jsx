import React, { useEffect } from "react";

function Toggle({ visible }) {
  useEffect(() => {
    console.log("컴포넌트 마운트");
    console.log(visible);
    return () => {
      console.log("컴포넌트 언마운트");
    };
  }, [visible]);
  return <div>toggle</div>;
}

export default Toggle;
