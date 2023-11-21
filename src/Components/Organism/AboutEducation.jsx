import { Timeline } from '@mantine/core';
import React from 'react';

export default function AboutEducation() {
  return (
    <div className="sm:w-1/2">
      <h1 className="text-2xl font-semibold font-poppins text-primary drop-shadow-md sm:mb-5 mt-10 sm:mt-0">Education</h1>
      <Timeline active={1} bulletSize={22} lineWidth={6}>
        <Timeline.Item title="University" variant="unstyled" className="font-semibold text-xl">
          <h2 className="font-poppins text-sm  font-semibold text-primary mt-3 ml-3">
            Ma'soem University <span className="text-black font-normal">- Kab. Bandung, Jawa Barat, Indonesia</span>
          </h2>
          <p className="font-poppins text-sm  font-semibold text-primary mt-1 ml-3">
            Bachelor of Computer Science <span className="text-black font-normal">- Digital Business</span>
          </p>
          <p className="font-poppins text-sm  font-semibold text-primary mt-1 ml-3">
            Cumulative GPA <span className="text-black font-normal">- 3.67</span>
          </p>
          <p className="font-poppins text-sm  font-normal text-gray-500 mt-1 ml-3">2020 - Present</p>
        </Timeline.Item>
        <Timeline.Item bulletSize={16} />
      </Timeline>
    </div>
  );
}
