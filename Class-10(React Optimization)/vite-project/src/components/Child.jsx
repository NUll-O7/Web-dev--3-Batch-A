import React from 'react'


function Child({buttonName}) {
    console.log('Child Component re-rendered')
  return (
    <div>
        <button>{buttonName}</button>
    </div>
  )
}

export default React.memo(Child)