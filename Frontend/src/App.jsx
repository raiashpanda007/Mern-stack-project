import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Upload_Card_Component from './Components/Upload_Card_Component'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
function App() {
  const showUpload_pop_up = useSelector((state) => state.Upload_pop_up.visible)

  return (
    
    <div className='h-screen w-screen bg-black text-white overflow-hidden relative'>
      {console.log(showUpload_pop_up)}
      {showUpload_pop_up && <div className='h-screen w-screen absolute z-10 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center' >
        <Upload_Card_Component />
      </div>}
      <Outlet />
    </div>
  )
}

export default App
