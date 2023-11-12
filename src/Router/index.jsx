import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

export default function index() {
  const initialRoute = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <div>About</div>,
    },
    {
      path: '/skills',
      element: <div>skills</div>,
    },
    {
      path: '/projects',
      element: <div>projects</div>,
    },
    {
      path: '/certificates',
      element: <div>Certificates</div>,
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
