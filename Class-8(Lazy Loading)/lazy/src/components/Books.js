import React, { useState } from 'react'
import { books } from './booksData'


function Books() {
  const [booksData , setBooks] = useState(null)

  function getData(){
    setBooks(JSON.stringify(books))
  }

 
  return (
    <>
    <button onClick={getData}>Get Books Data</button>
    <div>{booksData}</div>
    </>
  )
}

export default Books