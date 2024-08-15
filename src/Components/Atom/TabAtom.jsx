import { Tabs, Tooltip } from '@mantine/core';
import React from 'react';

export default function TabAtom(params) {
  const { value, images } = params;
  return (
    <>
      <Tabs.Panel value={value} className="mt-14">
        <div className="flex flex-wrap gap-4 justify-center">
          {images.map((val, index) => (
            <Tooltip label={val.name} variant="unstyled" withArrow color="cyan" className="bg-slate-300 w-1/2">
              <img key={index} src={val.img} alt="" className="w-40 sm:w-80 rounded-3xl h-40 py-5 shadow-lg border border-primary border-opacity-30 object-contain" />
            </Tooltip>
          ))}
        </div>
      </Tabs.Panel>
    </>
  );
}
