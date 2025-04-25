import { useContext } from "react";
import { CounterContext } from "../ContexApi/CounterContext";
const Counter = () => {
  const counter = useContext(CounterContext);
  console.log(counter);
  return (
    <>
      <p>Count: {counter.count}</p>
      <button onClick={() => counter.setCount(counter.count + 1)}>+</button>
      <button onClick={() => counter.setCount(counter.count - 1)}>-</button>
    </>
  );
};
export default Counter;
