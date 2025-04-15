import React, { useState } from "react";
import Name from "./Name";

function Books() {
  const [booksData, setBooks] = useState(null);
  const [nameComponent , setNameComponent]= useState(null)

  function getData() {
    import("./booksData").then((module) => {
      setBooks(JSON.stringify(module.books));
    });
  }

  function getComponent(){
    const importComponent = async () => {
        const module = await import('./Name.js');
        console.log(module)

         const NameComponent = module.default;
         setNameComponent(<NameComponent />);
  }
  importComponent()
}



  return (
    <>
      <button onClick={getData}>Get Books Data</button>
      <div>{booksData}</div>

      
      <button onClick={getComponent}>Get Component</button>
      {nameComponent}
    </>
  );
}

export default Books;
