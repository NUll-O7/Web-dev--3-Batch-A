import React, { useContext } from "react";
import { ParkContext } from "./ParkContext";
// Child 2 wants to go to merryGoRound

function Child2() {
  const data = useContext(ParkContext);

  return (
    <div className="children">
      <h3>Child2 {data.merryGoRound}</h3>
      <h5>{data.ticketForMerryGoRound()}</h5>
    </div>
  );
}

export default Child2;
