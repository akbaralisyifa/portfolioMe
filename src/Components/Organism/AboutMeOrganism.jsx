import React from 'react';
import { HERO_IMG } from '../../assets';

export default function AboutMeOrganism() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <div className=" sm:w-3/6 mx-14 sm:mx-0 mt-5">
        <p className="flex flex-col text-justify font-poppins text-base">
          <span className="mb-2">
            {' '}
            <span className="text-primary font-semibold">I am Muhammad Akbar Ali Syifa</span>, a student in the 7th Semester Digital Business non-regular class at the computer faculty.
          </span>
          <span className="mb-2">
            I am very proud to be an alumnus of the 4th batch of the <span className="text-primary font-semibold">MSIB Kampus Merdeka Dicoding program</span>, specializing in Front-End and Back-End Web Development. Currently, I am further
            developing my Hard Skills at <span className="text-primary font-semibold">SIB Kampus Merdeka Alterra Academy program </span> in the Batch 5 Independent, with the main focus on Front-End Engineering with ReactJS.
          </span>
          <span>I can develop and maintain websites using HTML, CSS, JavaScript, and React JS.</span>
        </p>
      </div>
      <div className="w-2/5 hidden sm:block">
        <img src={HERO_IMG} alt="" className="rounded-full drop-shadow-md w-96 block" />
      </div>
    </div>
  );
}
