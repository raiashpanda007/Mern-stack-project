import React,{useState} from 'react'

function Descriptions_Component({text,text_length = 50}) {
    const [showwFullText,setShowFullText] = useState(false);
    const toggleShowMore = () =>{
        setShowFullText(!showwFullText);
    }
    const shouldTurncate = text.length > text_length;
    const displayedText = shouldTurncate ? text.slice(0,text_length) : text;
  return (
    <div>
        <p>{displayedText}</p>
        {shouldTurncate && <span onClick={toggleShowMore} className='text-blue-500 cursor-pointer'>{showwFullText?'Show Less':'Show More'}</span>}
    </div>
  )
}

export default Descriptions_Component