import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About us',
    path: '/About',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/ProductGallery',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Gallery',
    path: '/ProductExplore',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/Contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  // {
  //   title: 'AdminDashboard',
  //   path: '/MainDash',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Login',
    path: '/LoginPage',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
 ];