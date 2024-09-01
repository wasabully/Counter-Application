import React, { useState, useCallback } from 'react';
import './Counter.css';

function Counter() {
  const initialCount = 0; 
  const [count, setCount] = useState(initialCount);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(initialCount);
  }, [initialCount]);

  return (
    <div className="counter-container">
      <h1 className="counter-display">Counter: {count}</h1>
      <div className="counter-buttons">
        <button onClick={handleDecrement} className="counter-button decrement">-</button>
        <button onClick={handleIncrement} className="counter-button increment">+</button>
        <button onClick={handleReset} className="counter-button reset">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
