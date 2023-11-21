import { Tabs, Tooltip } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { DicodingAcademy } from '../../DataSertificate';

export default function AtomCertif(props) {
  const { datas, value } = props;
  return (
    <>
      <Tabs.Panel value={value} className="mt-14">
        <div className="flex flex-wrap gap-4 justify-center">
          {datas.map((val, index) => (
            <Tooltip key={index} label={val.title} variant="unstyled" withArrow color="cyan" className="w-1/2">
              <div className="relative">
                <img src={val.img} alt={val.alt} className="w-52 sm:w-80 rounded-3xl p-2 shadow-lg border border-primary border-opacity-30 object-contain" />
                <Link
                  className="absolute rounded-3xl top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white bg-opacity-70 opacity-0 hover:opacity-100 font-semibold font-poppins text-primary drop-shadow-lg transition duration-300 ease-in-out"
                  to={val.link}
                  target="_blank"
                >
                  Detail Certificate
                </Link>
              </div>
            </Tooltip>
          ))}
        </div>
      </Tabs.Panel>
    </>
  );
}
