import { Tabs } from '@mantine/core';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SkillList from './Organism/SkillList.jsx';
import JudulAtom from './Atom/JudulAtom.jsx';

const initalLink = ['Languages', 'Frameworks/Librarys', 'UI Framework/Components', 'DBMS', 'Deployment/Container', 'Tools'];

export default function SkillsComponent() {
  const param = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(param.search.replace('?skill=', '') || 'Languages');

  const handleClik = (link) => {
    setIsActive(link);
    navigate(`/skills?skill=${link}`);
  };

  return (
    <div className="sm:w-3/5 mt-32 mx-auto">
      <JudulAtom title={'Skills'} />

      <Tabs defaultValue={isActive} variant="unstyled" className=" mt-10">
        <Tabs.List className="flex justify-center gap-1">
          {initalLink.map((link, index) => (
            <Tabs.Tab
              key={index}
              variant="unstyled"
              value={link}
              className={`text-base font-semibold hover:text-primary transition duration-300 ease-in-out ${isActive === link ? 'hover:text-white bg-primary text-white' : ''}`}
              onClick={() => handleClik(link)}
            >
              {link}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <div>
          <SkillList />
        </div>
      </Tabs>
    </div>
  );
}
