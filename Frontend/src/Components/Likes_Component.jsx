import React from 'react'
import { colors } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ThumbUpIcon } from '../assets/Icons.js'; // Ensure this icon accepts style or color props
function Likes_Component({likesCount,isLiked = true}) {
  return (
    <div className='w-1/4 flex items-start justify-evenly pt-1 pb-1 rounded-3xl border'>
        <ThumbUpIcon style={{color:isLiked?blue[500]:colors.common.white}}  />
        <span className='font-semibold font-outfit'>123k</span>
    </div>
  )
}

export default Likes_Component