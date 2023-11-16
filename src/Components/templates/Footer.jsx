import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ style }) {
  return (
    <div className={`text-center text-sm mb-5 ${style}`}>
      <p>
        Copyright © 2023 - Made with ❤️ by{' '}
        <Link target="blank" to="https://www.linkedin.com/in/akbaralisyifa/" className="font-semibold ">
          Muhammad Akbar Ali Syifa
        </Link>
      </p>
    </div>
  );
}
