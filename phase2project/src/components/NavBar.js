import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { IoIosAddCircle, IoIosSearch }  from 'react-icons/io';
import { MdFeed } from 'react-icons/md';

function NavBar({handleExploreRefresh}) {
  return (
    <div className="nav-bar">
        <NavLink className="nav-link" to="/">
            <FaHome />
        </NavLink>
        <NavLink className="nav-link" to="/new">
            <IoIosAddCircle />
        </NavLink>
        <NavLink className="nav-link" to="/posts">
            <MdFeed />
        </NavLink>
        <NavLink className="nav-link" to="/explore">
            <IoIosSearch onClick={handleExploreRefresh} />
        </NavLink>
    </div>
  )
}

export default NavBar;