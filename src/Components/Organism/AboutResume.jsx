import React from 'react';

export default function AboutResume() {
  return (
    <div className="sm:mt-8 mt-16 mx-14 sm:mx-0">
      <h1 className="text-2xl font-semibold font-poppins text-primary drop-shadow-md">Resume</h1>
      <p>
        You can read my resume{' '}
        <a href="https://drive.google.com/file/d/1URHFPllwHIl7w0IDkR1fbJ4ETLoqCo5i/view?usp=sharing" target="_blank" rel="noreferrer" className="text-primary font-semibold border-b border-primary">
          here.
        </a>
      </p>
    </div>
  );
}
