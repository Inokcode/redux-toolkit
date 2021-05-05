import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useSelector((state) => state.counter);
  // const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        incrementByAmount 5
      </button>
    </div>
  );
}

export default App;
