import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full '>
        <div className='logo font-bold text-white text-2xl'>
          <span className='text-sky-700 '>&lt;</span>
          Pass
          <span className='text-sky-700'>OP/&gt;</span>
        </div>
        <div className='flex justify-center items-center font-bold'>
            Store your Passwords  <img className='w-[30px] h-[30px] mx-2' src="icons/password.png" alt="" />
        </div>
    </div>
  )
}

export default Footer
