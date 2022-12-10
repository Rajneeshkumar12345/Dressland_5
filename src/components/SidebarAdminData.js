import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import * as MdIcons from 'react-icons/md';

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
    title: 'USER REG',
    path: '/UserAdmin',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text-admin user-registration'
  },
  {
    title: 'GALLERY',
    path: '/AdminGallery',
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
    icon: <AiIcons.AiOutlineShop />,
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
    icon: <MdIcons.MdContacts />,
    cName: 'nav-text-admin'
  }
  ,
  {
    title: 'ENQUIRY',
    path: '/EnquiryForm',
    icon: <AiIcons.AiOutlineMessage />,
    cName: 'nav-text-admin'
  },
  {
    title: 'TRANSACTION',
    path: '/Transaction',
    icon: <AiIcons.AiOutlineShop />,
    cName: 'nav-text-admin'
  }
];