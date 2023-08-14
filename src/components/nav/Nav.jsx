import React from 'react'
import logo from '../../img/logo.png'
import './Nav.css'
import ItemFilter from '../itemFilter/ItemFilter'
import AddGuests from '../addGuests/AddGuests'

function Nav(props) {
  return (
    <>
    
    <div className="nav">
        <div className='contImg'>
            <a href="#"><img className="logo" src={logo}/></a>
        </div>
        <div>
          <input  type="text" placeholder='Location'/> 
          <ItemFilter data={props.data}></ItemFilter>
          <input type="text" placeholder='add guests'/>
          <button className="btnSearch">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <AddGuests></AddGuests>        
      
    </div>
    </>
  )
}

export default Nav


