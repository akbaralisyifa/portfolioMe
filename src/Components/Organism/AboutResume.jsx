import React from 'react';

export default function AboutResume() {
  return (
    <div className="sm:mt-8 mt-16 mx-14 sm:mx-0">
      <h1 className="text-2xl font-semibold font-poppins text-primary drop-shadow-md">Resume</h1>
      <p>
        You can read my resume{' '}
        <a href="https://drive.google.com/file/d/14_4Qy5IFZGv2bp58BLtD2Y5vEfCM3wV-/view?usp=sharing" target="_blank" rel="noreferrer" className="text-primary font-semibold border-b border-primary">
          here.
        </a>
      </p>
    </div>
  );
}
