import "./Button.css";

import { useState } from "react";

const initialState = true;

export default function Button() {
  const [state, setState] = useState(initialState);
  return (
    <button
      className="card__button-answer"
      type="button"
      onClick={() => {
        setState((currentState) => {
          const newState = !currentState;
          return newState;
        });
        console.log(state);
      }}
    >
      show answer
    </button>
  );
}
