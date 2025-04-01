import React from "react";
// Child 2 wants to go to merryGoRound
function Child2({rules , ticket}) {


  return (
    <div className="children">
      <h3>Child2 {rules} </h3>
      <h5>{ticket()}</h5>
    </div>
  );
}

export default Child2;
