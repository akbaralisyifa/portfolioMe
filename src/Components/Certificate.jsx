import React from 'react';
import JudulAtom from './Atom/JudulAtom';
import { Tabs } from '@mantine/core';
import CertificateList from './Organism/CertificateList';
import { useLocation, useNavigate } from 'react-router-dom';

const initalLink = ['MSIB Kampus Merdeka', 'Dicoding Academy', 'Alterra Academy', 'Google', 'Lainnya'];
export default function Certificates() {
  const params = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState(params.search.replace('?certif=', '') || 'MSIB Kampus Merdeka');

  const handleClik = (link) => {
    setIsActive(link);
    navigate(`?certif=${link}`);
  };
  return (
    <div className="sm:w-4/6 mt-32 mx-auto mb-10">
      <JudulAtom title={'Certificates'} />

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
          <CertificateList />
        </div>
      </Tabs>
    </div>
  );
}
