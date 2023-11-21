import { Tabs, Tooltip } from '@mantine/core';
import React from 'react';
import { MSIBKampusMerdeka, DicodingAcademy, AlterraAcademy, Google, Lainnya } from '../../DataSertificate';
import { Link } from 'react-router-dom';
import AtomCertif from '../Atom/AtomCertif';

export default function CertificateList() {
  return (
    <>
      <AtomCertif value="MSIB Kampus Merdeka" datas={MSIBKampusMerdeka} />
      <AtomCertif value="Dicoding Academy" datas={DicodingAcademy} />
      <AtomCertif value="Alterra Academy" datas={AlterraAcademy} />
      <AtomCertif value="Google" datas={Google} />
      <AtomCertif value="Lainnya" datas={Lainnya} />
    </>
  );
}
