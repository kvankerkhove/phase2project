import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { IoIosAddCircle, IoIosSearch }  from 'react-icons/io'
import { MdFeed } from 'react-icons/md'

function NavBar() {
  return (
    <div className="nav-bar">
        <NavLink to="/">
            <FaHome />
        </NavLink>
        <NavLink to="/posts/new">
            <IoIosAddCircle />
        </NavLink>
        <NavLink exact to="/posts">
            <MdFeed />
        </NavLink>
        <NavLink to="/explore">
            <IoIosSearch />
        </NavLink>
    </div>
  )
}

export default NavBar