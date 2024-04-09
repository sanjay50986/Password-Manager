import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-slate-900 text-white'>
      <div className='mycontainer flex justify-between items-center px-4 py-4 h-14'>

        <div className='logo font-bold text-white text-2xl'>
          <span className='text-sky-700'>&lt;</span>
          Pass
          <span className='text-sky-700'>OP/&gt;</span>
        </div>

        <button className='bg-sky-800 h-[40px] w-[110px] rounded-lg flex items-center gap-2 ring-white ring-1 '>        
          <img className='w-6 h-6 ml-[8px]' src="icons/github.png" alt="" />
          <h1 className='font-bold flex text-center text-lg'>GitHub</h1>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
