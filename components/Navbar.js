import React from 'react'
import styles from '/styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <h1 className='logo'>Biccos</h1>
        <div className="navContainer">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
        <div className="loginBtn">
            <button className='login'>Login</button>
            <button className='signup'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar