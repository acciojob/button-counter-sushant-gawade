import React, { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Button clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </>
  );
};

export default ButtonCounter;
