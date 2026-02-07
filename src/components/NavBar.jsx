import React from 'react'
import DateTime from './DateTime'
import "./nav.scss"
const NavBar = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icons">
                <img src="./Navbar-icon/apple.svg" alt="" />
            </div>

            <div className="nav-item">
                <p>Aditya Deshmukh</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
            

        </div>


        <div className="right">
            <div className="nav-icon">
                <img src="./Navbar-icon/wifi.svg" alt="" />
            </div>

            <div className="nav-item">
                <DateTime/>
            </div>

        </div>
    </nav>
  )
}

export default NavBar
