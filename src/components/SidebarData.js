import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'ABOUT US',
    path: '/About',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'PRODUCTS',
    path: '/PubProdGallery',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'GALLERY',
    path: '/ProductExplore',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'CONTACT',
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
    title: 'LOG IN',
    path: '/LoginPage',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
 ];