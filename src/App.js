import React from "react";
import "./styles.css";
import store from "./redux/store";
import {  increment, 
          increment_in_2, 
          decrement, 
          decrement_in_2, 
          reset 
        } 
        from "./redux/contador/contador-actions";

function App() {
  return (
    <div className="App">
      <div className="contador-container">
        <div className="contador-title">{store.getState().contador}</div>
        <div className="buttons">
        <button
          className="contador-btn"
          onClick={() => store.dispatch(increment())}
        >
          +
        </button>
        <button
          className="contador-btn"
          onClick={() => store.dispatch(increment_in_2())}
        >
          +2
        </button>
        <button
          className="contador-btn"
          onClick={() => store.dispatch(decrement())}
        >
          -
        </button>
        <button
          className="contador-btn"
          onClick={() => store.dispatch(decrement_in_2())}
        >
          -2
        </button>
        </div>
        <button
          className=""
          onClick={() => store.dispatch(reset())}
        >
          Reset counter
        </button>
      </div>
    </div>
  );
}

export default App;
