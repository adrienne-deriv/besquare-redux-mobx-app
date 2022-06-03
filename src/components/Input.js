import React from "react";
import { INCREMENT_BY } from "../store/actions";

function Input(handler) {
  const [value, setValue] = React.useState();

  return (
    <div className="input-box">
      <h2>Increment by</h2>
      <input
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => console.log(value)}>Ok</button>
    </div>
  );
}

export default Input;
