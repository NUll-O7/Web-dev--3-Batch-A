
import React from 'react'
// Child 1 wants to go to RollerCoaster

function Child1({rules , ticket}) {
 
  return (
    <div className='children'>
        <h3>Child1 {rules}  </h3>
        <h5>{ticket()}</h5>
     
    </div>
  )
}

export default Child1
