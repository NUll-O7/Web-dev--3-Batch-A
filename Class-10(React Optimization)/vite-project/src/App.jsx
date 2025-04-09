import { useState , useCallback} from 'react'

import './App.css'
import Memo from './components/Memo'
import Child from './components/Child'

function App() {

  const [count , setCount] = useState(0)

  // function sayHello(){
  //   console.log('hello')
  // }

  let sayHello = useCallback(()=>{
    console.log ('Hello')
  }, [])
  


  return (
    <>
      {/* <Memo/> */}

     <button onClick={()=>setCount(count+1)}>Increment</button>

      <h1>{count}</h1>

      <Child buttonName='Say Bye' sayHelloFn={sayHello}/>
      
    </>
  )
}

export default App
