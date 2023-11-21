import React from 'react';
import JudulAtom from './Atom/JudulAtom';

// data
import { datas } from '../dataProject';
import ProjectList from './Organism/ProjectList';

export default function Projects() {
  return (
    <div className="sm:w-2/6 mt-32 mx-auto ">
      <JudulAtom title={'Projects'} />

      <div className="mt-10">
        <h2 className="font-poppins text-xl bg-primary text-white font-normal py-2 rounded-md w-1/2 text-center sm:mx-0  mx-auto">Website</h2>

        <ProjectList datas={datas} />
      </div>
    </div>
  );
}
