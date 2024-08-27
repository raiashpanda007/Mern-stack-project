import React from 'react'
import { useSelector } from 'react-redux'
function Search_Result_options({Label = "Videos",onClick}) {
    const SearchType = useSelector((state) => state.searchType.type);
  return (
    <div onClick={onClick} className={SearchType == Label?'h-1/4 border flex justify-center items-center rounded-lg p-3':'h-1/4 border flex justify-center items-center p-3 rounded-lg bg-neutral-500 hover:bg-neutral-800 cursor-pointer transition-opacity '}>
        {Label}
        
    </div>
  )
}

export default Search_Result_options