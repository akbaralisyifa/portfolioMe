import React from 'react';
import Navbar from '../Components/templates/Navbar';

export default function Appshell({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
