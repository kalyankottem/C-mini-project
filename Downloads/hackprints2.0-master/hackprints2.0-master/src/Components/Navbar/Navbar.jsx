import React from 'react'
import './Assets/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-left'>SHAREBOX</div>
        <div className='nav-mid'>
            <ul className='nav-mid-list'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
        <div className='nav-right'>Login</div>
    </div>
  )
}

export default Navbar