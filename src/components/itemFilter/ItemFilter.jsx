import { useState } from "react"

export default function ItemFilter(props){

  return(
    <>
        
        {props.data.map((el, i) => {
        return(
        <div >
          <button className="inline-flex items-center text-gray-600 my-3 p-2 rounded-xl   focus:outline-none hover:bg-gray-200  hover:bg-opacity-60 w-max active:bg-gray-300" onClick={() => setFilterLocation(filterLocation = props.data.city)}>
          <span className="material-icons MuiIcon-root mr-2" aria-hidden="true">
            {el.city}, Finland</span> 
          </button>
                  
        </div>
        ) 
      })}
     
    </>
  )

} 


