import { Burger } from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const initialLink = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/skills',
      name: 'Skills',
    },
    {
      path: '/projects',
      name: 'Projects',
    },
    {
      path: '/certificates',
      name: 'Certificates',
    },
    {
      path: '/contact',
      name: 'Contact',
    },
  ];

  const findActive = initialLink.filter((link) => link.name === 'Home');

  const [isActive, setIsActive] = useState(findActive);
  const [opened, setOpened] = useState(false);

  const handleClik = (link) => {
    console.log(link);
    setIsActive(link);
    setOpened(false);
  };

  const toggle = () => {
    setOpened((o) => !o);
  };

  return (
    <div className="w-full shadow-sm border-b fixed top-0 bg-white z-10">
      <ul className="flex py-5 sm:justify-center flex-col sm:flex-row">
        {initialLink.map((link, index) => (
          <li key={index} className="mr-10 hidden sm:block">
            <Link
              className={` py-2 font-semibold transition duration-300 ease-in-out ${isActive === link.name ? 'border-b-2 text-primary border-primary hover:text-primborder-primary' : ' hover:text-gray-600'}`}
              to={link.path}
              onClick={() => setIsActive(link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <Burger className="sm:hidden ml-auto mr-5" opened={opened} onClick={toggle} />
        {initialLink.map((link, index) => (
          <li key={index} className={`sm:hidden mt-4 text-center  ${opened ? 'block transition-all duration-700 ease-in-out' : 'hidden'}`}>
            <Link
              className={` py-2 font-semibold transition duration-300 ease-in-out ${isActive === link.name ? 'border-b-2 text-primary border-primary hover:text-primborder-primary' : ' hover:text-gray-600'}`}
              to={link.path}
              onClick={() => handleClik(link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
