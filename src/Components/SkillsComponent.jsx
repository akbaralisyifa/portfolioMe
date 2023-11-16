import { Tabs } from '@mantine/core';

export default function SkillsComponent() {
  return (
    <div>
      <Tabs keepMounted={false} defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first">First tab</Tabs.Tab>
          <Tabs.Tab value="second">Second tab</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first">First panel</Tabs.Panel>
        <Tabs.Panel value="second">Second panel</Tabs.Panel>
      </Tabs>
    </div>
  );
}
