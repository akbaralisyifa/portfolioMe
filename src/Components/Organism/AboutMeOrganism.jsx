import React from 'react';
import { HERO_IMG } from '../../assets';

export default function AboutMeOrganism() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <div className=" sm:w-3/6 mx-14 sm:mx-0 mt-5">
        <p className="flex flex-col text-justify font-poppins text-base">
          <span className="mb-2">
            {' '}
            <span className="text-primary font-semibold">I am Muhammad Akbar Ali Syifa</span>, a student in the 8th Semester Digital Business non-regular class at the computer faculty.
          </span>
          <span className="mb-2">
            As a fresh graduate, I have honed my skills as a <span className="text-primary font-semibold">Full Stack Developer</span>, proficient in <span className="text-primary font-semibold">Front-End development using JavaScript, React JS, and Next JS</span>, as well as in <span className="text-primary font-semibold">Back-End development using Golang</span>. Through participation in the MSIB Kampus Merdeka program and a bootcamp at Alterra Academy, I have sharpened my front-end engineering skills and developed high-performance, responsive websites.
          </span>
          <span>This combination of formal education and practical experience equips me with a deep understanding of the needs and challenges of contemporary digital business.</span>
        </p>
      </div>
      <div className="w-2/5 hidden sm:block">
        <img src={HERO_IMG} alt="" className="rounded-full drop-shadow-md w-96 block" />
      </div>
    </div>
  );
}
