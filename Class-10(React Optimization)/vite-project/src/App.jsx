import { useState } from 'react'

import './App.css'
import Memo from './components/Memo'
import Child from './components/Child'

function App() {

  const [count , setCount] = useState(0)


  return (
    <>
      {/* <Memo/> */}

     <button onClick={()=>setCount(count+1)}>Increment</button>

      <h1>{count}</h1>

      <Child buttonName='Say Bye'/>
      
    </>
  )
}

export default App
