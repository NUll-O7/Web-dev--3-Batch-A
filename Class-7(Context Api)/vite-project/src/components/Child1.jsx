import React, { useContext } from "react";
import { ParkContext } from "./ParkContext";

// Child 1 wants to go to RollerCoaster

function Child1() {
  const data = useContext(ParkContext);
  console.log(data);

  return (
    <div className="children">
      <h3>Child1 {data.rollerCoaster} </h3>
      <h5>{data.ticketForRollerCoaster()}</h5>
    </div>
  );
}

export default Child1;
