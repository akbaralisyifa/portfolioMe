import React from 'react';
import Navbar from '../Components/templates/Navbar';
import Footer from '../Components/templates/Footer';

export default function Appshell({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
