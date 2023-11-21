import React from 'react';
import JudulAtom from './Atom/JudulAtom';
import { Timeline, Tooltip } from '@mantine/core';
import { Link } from 'react-router-dom';

import { dataContacts } from '../dataContact';
import img from '../assets/img/fotomy.png';
import linkedinAtom from './Atom/linkedinAtom';

export default function Contacts() {
  return (
    <div className="sm:w-2/6 mt-32 mx-auto ">
      <JudulAtom title={'Contact'} />

      <div className="mt-10 flex items-center flex-wrap justify-center">
        <div className="sm:w-1/2">
          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item bullet={'🗨️'} title="Connect With Me:">
              <div className="mt-4 flex gap-3">
                {dataContacts.map((val, index) => (
                  <Tooltip withArrow label={val.label} position="bottom" color="cyan">
                    <Link
                      key={index}
                      to={val.link}
                      target="_blank"
                      className="rounded-full w-12 h-12 border border-primary border-opacity-50 hover:border-primary hover:bg-primary flex justify-center items-center hover:text-white text-primary text-opacity-70 transition duration-300 ease-in-out "
                    >
                      {val.img}
                    </Link>
                  </Tooltip>
                ))}
              </div>
            </Timeline.Item>

            <Timeline.Item />
          </Timeline>
        </div>

        <div className="sm:w-1/2">
          <img src={img} alt="" className="w-80" />
        </div>
      </div>
    </div>
  );
}
