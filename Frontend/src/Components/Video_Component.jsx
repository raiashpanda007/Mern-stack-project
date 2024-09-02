import React from 'react';
import { ThumbUpIcon } from '../assets/Icons.js'; // Ensure this icon accepts style or color props
import { blue } from '@mui/material/colors'; // Import the specific color
import { colors } from '@mui/material';

function Video_Component({ label, ...metaData }) {
    return (
      <div>
        <div className="flex items-center">
          {/* Change the color using the style prop */}
          <ThumbUpIcon style={{ color: metaData.isLiked ? blue[500] : colors.common.white }} />
          <div>{label}</div>
        </div>
      </div>
    );
  }
  

export default Video_Component;
