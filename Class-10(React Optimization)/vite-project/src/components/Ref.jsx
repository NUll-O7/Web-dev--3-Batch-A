import React, { useState, useRef } from "react";

function Ref() {
  const [input, setInput] = useState("");

  function reset() {}

  return (
    <div>
      <h1>Use Ref</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Ref;
