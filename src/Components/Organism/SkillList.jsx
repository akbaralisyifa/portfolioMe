import React from 'react';
import TabAtom from '../Atom/TabAtom';
import { Languages, FrameworksLibrarys, UIFrameworkComponents, DBMS, Tools, Deployment } from '../../dataSkill';

export default function SkillList({ isActive }) {
  return (
    <>
      <TabAtom value="Languages" images={Languages} />
      <TabAtom value="Frameworks/Librarys" images={FrameworksLibrarys} />
      <TabAtom value="UI Framework/Components" images={UIFrameworkComponents} />
      <TabAtom value="DBMS" images={DBMS} />
      <TabAtom value="Deployment/Container" images={Deployment} />
      <TabAtom value="Tools" images={Tools} />
    </>
  );
}
