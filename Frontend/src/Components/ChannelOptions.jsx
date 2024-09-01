import { current } from '@reduxjs/toolkit'
import React from 'react'

function ChannelOptions({label,currentTab,onClick}) {
  return (
    <div onClick={onClick} className={currentTab == label? 'cursor-pointer bg-gray-800 text-white rounded w-1/6 flex items-center justify-center font-outfit font-semibold text-2xl  h-2/3':'cursor-pointer bg-gray-800 text-neutral-500 rounded w-1/6 flex items-center justify-center font-outfit font-semibold text-2xl  h-2/3'}>
        {label}
        {console.log(currentTab)}
    </div>
  )
}

export default ChannelOptions