import { useState } from "react";
// import styles from "./App.module.css";

import IsOddorEven from "./IsOddorEven";
import RandomCard from "./RandomCard";

// Must be remembered
// Must have parent element
// Must have closing
// Must be careful of reserved keyword for = htmlFor, class = className
// Dynamic value (expression) must be written withing {} braces

// synthetic event

// when component re-render?
// => when state will update, force update, props change

// CSS
// inline CSS
// external CSS
// modular CSS
// component CSS

function App() {
  const [count, setCount] = useState(0);
  const cardValues = [10, 21, 30, 41, 50, 65, 80];
  const [checkedValue, setCheckedValue] = useState(null);

  const handleIncrement = (num) => {
    // setCount(count + num);
    setCount((prevCount) => count + num); // It's a callback function & here prevCount will indicate count existing value
  };

  const handleDecrement = (num) => {
    // setCount(count - num);
    setCount((prevCount) => count - num); // It's a callback function & here prevCount will indicate count existing value
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container">
        <h2>Count: {count}</h2>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <button onClick={() => handleDecrement(1)}>Deccrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <IsOddorEven count={count} checkedValue={checkedValue} />
      <RandomCard cardValues={cardValues} setCheckedValue={setCheckedValue} />
    </>
  );
}

// map doing loop on exicting loop and return a new array

export default App;
