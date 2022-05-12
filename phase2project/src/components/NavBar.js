import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
// import { FaHome } from 'react-icons/fa';
// import { IoIosAddCircle, IoIosSearch }  from 'react-icons/io';
// import { MdFeed } from 'react-icons/md';
import Nav from 'react-bootstrap/Nav'
import { IconContext } from 'react-icons'

function NavBar({handleExploreRefresh}) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className='navbar'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>
                </li>
                {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                    </li>
                );
                })}
            </ul>
            </nav>
        </IconContext.Provider>
    </> 
   
  )
}

export default NavBar;


{/* <div className="nav-bar">
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
</div> */}
