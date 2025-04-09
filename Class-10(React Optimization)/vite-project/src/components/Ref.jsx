import React, { useState, useRef } from "react";

function Ref() {
  const [input, setInput] = useState("");

  function reset() {
    setInput('')
     refElement.current.focus()
     refElement.current.style.color = 'red'
       refElement.current.style.backgroundColor = 'white'
  }

   let refElement = useRef('')
   console.log(refElement)

  return (
    <div>
      <h1>Use Ref</h1>

      <input
      ref={refElement} 
     
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Ref;
