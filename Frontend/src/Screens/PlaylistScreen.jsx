import React from 'react'
import { useParams } from 'react-router-dom'
function PlaylistScreen() {
    const Params = useParams()
    {console.log(Params)} 
  return (
    <div>PlaylistScreen</div>
      
  )
}

export default PlaylistScreen