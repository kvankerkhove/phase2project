import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/feed">Feed</NavLink>
        <NavLink to="/explore">Explore</NavLink>
    </div>
  )
}

export default NavBar