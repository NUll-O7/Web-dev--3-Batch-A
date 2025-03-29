import React, { useEffect, useState } from "react";

function GetData() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(1);

  function fn() {
    async function fetchData() {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      let user = await response.json();
      console.log(user);
      setData(user);
    }
    fetchData();
  }

  useEffect(fn, [id]);

  return <>{data == null ? <h1>Loading Data...</h1> : <h1>{data.name}</h1>}
  
   <button onClick={()=>setId(id+1)}>ChangeId</button>
   <h2>{id}</h2>
  </>;
}

export default GetData;
