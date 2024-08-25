import React from 'react'

function Button({ label, onClick, v = '1', className1 = '', ...props }) {
  const className = v === '1' 
    ? 'h-5/4 md:h-full p-2 md:p-3 md:text-2xl rounded-lg bg-red-500 text-white font-semibold font-outfit hover:bg-white hover:text-red-500 transition duration-300 ease-in-out' 
    : 'h-5/4 md:h-full p-2 md:p-3 md:text-2xl rounded-lg bg-white text-red-500 font-semibold font-outfit hover:bg-red-500 hover:text-white transition duration-300 ease-in-out'
  return (
    <button className={className+' '+className1} onClick={onClick} {...props}>
      {label}
    </button>
  )
}

export default Button
