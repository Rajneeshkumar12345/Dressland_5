import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const VendorSidebarData = [
  {
    title: 'DASHBOARD',
    path: '/VendorDashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text-admin'
  },
  {
    title: 'CENTRESHOP',
    path: '/VendorCenterShop',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text-admin'
  },
  {
    title: 'STOCK',
    path: '/VendorStock',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text-admin'
  },
  {
    title: 'SUPPORT',
    path: '/VendorSupport',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text-admin user-registration'
  },
  {
    title: 'TRANSACTION',
    path: '/VendorTransaction',
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