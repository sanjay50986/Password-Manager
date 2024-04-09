import React from 'react'
import NavBar from './Components/NavBar'
import Manager from './Components/Manager'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
      <NavBar/>
      <div className='min-h-[85vh]'>
        <Manager/>
      </div>      
      <Footer/>

    </>
  )
}

export default App
