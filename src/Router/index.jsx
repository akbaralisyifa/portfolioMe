import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Project from '../Pages/Project';
import Certificate from '../Pages/Certificate';

export default function index() {
  const initialRoute = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/skills',
      element: <Skills />,
    },
    {
      path: '/projects',
      element: <Project />,
    },
    {
      path: '/certificates',
      element: <Certificate />,
    },
    {
      path: '/contact',
      element: <div>contact</div>,
    },
  ];

  return (
    <Routes>
      {initialRoute.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
