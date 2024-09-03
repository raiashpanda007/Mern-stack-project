import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <div className='h-screen w-screen bg-black text-white overflow-hidden relative'>
      <div className='absolute z-10'>
        hio
      </div>
      <Outlet />
    </div>
  )
}

export default App
