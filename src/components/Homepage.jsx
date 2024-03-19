import React from 'react'

function Homepage({show}) {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='w-[50%] pl-10'>
        <img className='w-[40vw]' src="/Home.png" alt="homepic" />
      </div>
      <div className='w-[50%]'>
        <h1 className='text-8xl font-medium'>DICE GAME</h1>
        <button onClick={show} className='ml-[28vw] bg-black px-10 py-2 mt-3 text-white rounded-sm'>Play Now</button>
      </div>
    </div>
  )
}

export default Homepage