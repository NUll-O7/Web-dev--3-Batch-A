import React from 'react'

function Pagination() {
  return (
      <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center'>
        <div className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div>1</div>
        <div className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
      </div>
  )
}

export default Pagination