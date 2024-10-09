import React from 'react'
import './Header.css'

function Header() {
  return (
    <div >
        <div className='headerMain'>
            <div className='circle-icon'>
                <img src="circle-icon.png" alt="circle-icon" />
            </div>
            <h1 className='header-text-sys'>Inventory Management System</h1>
            <div className='header-text-home'>Home</div> 
        </div>
    </div>
  )
}

export default Header
