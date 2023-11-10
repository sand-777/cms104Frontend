import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar" id="myNavbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
    <a href="javascript:void(0);" className="icon" onclick="myFunction()">
      <i className="fa fa-bars"></i>
    </a>
  </div>
  )
}

export default Navbar