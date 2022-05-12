import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoIosAddCircle, IoIosSearch }  from 'react-icons/io';
import { MdFeed } from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add Post',
    path: '/new',
    icon: <IoIosAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'My Gallery',
    path: '/posts',
    icon: <MdFeed/>,
    cName: 'nav-text'
  },
  {
    title: 'Explore Page',
    path: '/explore',
    icon: <IoIosSearch />,
    cName: 'nav-text'
  }
];