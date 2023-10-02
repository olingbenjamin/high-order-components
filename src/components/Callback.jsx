/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState, useCallback } from "react";
import AppWrapper from "../wrapper/Appwrapper";
function Callback() {
  const [count, setCount] = useState(0);
  const increaseCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const decreaseCount = useCallback(() => {
    setCount((count) => count - 1);
  }, []);
  return (
    <div>
      <p>this is the count:{count}</p>
      <button onClick={increaseCount}>inc</button>
      <button onClick={decreaseCount}>dec</button>
    </div>
  );
}

export default AppWrapper(Callback, "callback");
