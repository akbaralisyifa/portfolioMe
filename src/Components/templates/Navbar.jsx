import { Burger } from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

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
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="w-full static shadow-sm border-b ">
      <ul className=" flex  py-5 justify-center">
        {initialLink.map((link, index) => (
          <li key={index} className="mr-10">
            <Link
              className={` py-2 font-semibold transition duration-300 ease-in-out ${isActive === link.name ? 'border-b-2 text-primary border-primary hover:text-primborder-primary' : ' hover:text-gray-600'}`}
              to={link.path}
              onClick={() => setIsActive(link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}

        <Burger className="hidden" opened={opened} onClick={toggle} />
      </ul>
    </div>
  );
}
