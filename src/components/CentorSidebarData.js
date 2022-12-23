import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import * as MdIcons from 'react-icons/md';

export const CentorSidebarData = [
  {
    title: 'DASHBOARD',
    path: '/CentorDashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text-admin'
  },
  {
    title: 'CENTRESHOP',
    path: '/CentorCenterShop',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text-admin'
  },
  {
    title: 'STOCK',
    path: '/CentorStock',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text-admin'
  },
  {
    title: 'SUPPORT',
    path: '/CentorSupport',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text-admin user-registration'
  },
  {
    title: 'TRANSACTION',
    path: '/CentorTransaction',
    icon: <AiIcons.AiOutlineShop />,
    cName: 'nav-text-admin'
  },
  {
    title: 'BUY PRODUCT',
    path: '/ProductGallery',
    icon: <AiIcons.AiOutlineShop />,
    cName: 'nav-text-admin'
  }
];