import React from 'react'
import { colors } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ThumbDownAltIcon } from '../assets/Icons.js'; // Ensure this icon accepts style or color props

function Dislike_Component({dislikesCount,isDisLiked = false}) {
  return (
    <div className=' w-1/4 flex items-start justify-evenly pt-1 pb-1 rounded-3xl border cursor-pointer'>
        <ThumbDownAltIcon style={{color:isDisLiked?blue[500]:colors.common.white}}  />
        <span className='font-semibold font-outfit'>123k</span>
    </div>
  )
}

export default Dislike_Component