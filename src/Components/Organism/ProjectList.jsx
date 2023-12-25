import { DEMO, GITHUB } from '../../assets';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mantine/core';

export default function ProjectList({ datas }) {
  return (
    <div className="flex flex-wrap gap-3 mt-10 justify-center mb-10 ">
      {datas.map((data, index) => (
        <div key={index} className=" w-[250px] rounded-xl border border-primary border-opacity-30 p-3 shadow-lg flex flex-col justify-between">
          <div className="flex justify-between items-center ">
            <h3 className="text-xl font-poppins text-primary font-semibold drop-shadow-md">{data.title}</h3>
            <div className="flex gap-3">
              <Tooltip withArrow label="Github" position="top" color="cyan">
                <Link to={data.github} target="_blank">
                  <img src={GITHUB} alt="iconGithub" className="w-6 object-contain cursor-pointer opacity-50 hover:opacity-100 transition duration-300 ease-in-out" />
                </Link>
              </Tooltip>
              <Tooltip withArrow label="Demo" position="top" color="cyan">
                <Link to={data.demo} target="_blank" className={`${data.demo === '' ? 'hidden' : ''}`}>
                  <img src={DEMO} alt="iconDemo" className={`w-6 object-contain cursor-pointer opacity-50 hover:opacity-100 transition duration-300 ease-in-out`} />
                </Link>
              </Tooltip>
            </div>
          </div>
          <p className="pt-3 font-poppins font-light">{data.deskripsi}</p>
          <div className="mt-5 flex gap-3 flex-wrap">
            {data.icons.map((val, index) => (
              <Tooltip withArrow label={val.name} position="top" color="cyan">
                <img key={index} src={val.img} alt="icon" className="w-8 object-contain cursor-pointer" />
              </Tooltip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
