import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarAdminData = [
  {
    title: 'DASHBOARD',
    path: '/MainDash',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text-admin'
  },
  {
    title: 'PRODUCT',
    path: '/Product',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text-admin'
  },
  {
    title: 'STOCK',
    path: '/Stock',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text-admin'
  },
  {
    title: 'USER REGISTRATION',
    path: '/UserRegistration',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text-admin user-registration'
  },
  {
    title: 'GALLERY',
    path: '/ProductGallery',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text-admin'
  },
  {
    title: 'MASTER',
    path: '/Master',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text-admin'
  },
  {
    title: 'CENTERSHOP',
    path: '/CenterShop',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text-admin'
  }
  ,
  {
    title: 'ABOUT US',
    path: '/AboutAdminPage',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text-admin'
  }
  ,
  {
    title: 'CONTACT US',
    path: '/ContactAdminPage',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text-admin'
  }
  ,
  {
    title: 'ENQUIRY',
    path: '/EnquiryForm',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text-admin'
  }
];