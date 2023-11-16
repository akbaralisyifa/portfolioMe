import { Timeline } from '@mantine/core';
import React from 'react';

export default function AboutExperience() {
  return (
    <div className="mt-20 sm:mt-0 sm:w-1/2 ">
      <h1 className="text-2xl font-semibold font-poppins text-primary drop-shadow-md mb-5">Work Experience</h1>
      <Timeline active={1} bulletSize={22} lineWidth={6}>
        <Timeline.Item title="Alterra Academy" variant="unstyled" className="font-semibold text-xl">
          <h2 className="font-poppins text-sm  font-semibold text-primary mt-3 ml-3">Front-End Engineer Career With React Js</h2>
          <p className="font-poppins text-sm  font-normal text-gray-500 mt-1 ml-3">Agu 2023 - Dess 2023</p>
        </Timeline.Item>
        <Timeline.Item title="Dicoding Indonesia" variant="unstyled" className="font-semibold text-xl">
          <h2 className="font-poppins text-sm  font-semibold text-primary mt-3 ml-3">Front End - Back End Developer Student</h2>
          <p className="font-poppins text-sm  font-normal text-gray-500 mt-1 ml-3">Feb 2023 - Jun 2023</p>
        </Timeline.Item>

        <Timeline.Item lineWidth={1} />
      </Timeline>
    </div>
  );
}
