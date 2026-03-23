import { useState } from 'react';
import { Tabs, Button, Group } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './TabsPage.module.scss';
function TabsPage() {
  const [activeTab, setActiveTab] = useState<string | null>('gallery');

  return (
    <>
    <div className={classes.scrollContainer}>
        <div className={classes.scrollItem}>100</div>
        <div className={classes.scrollItem}>200</div>
        <div className={classes.scrollItem}>300</div>
        <div className={classes.scrollItem}>400</div>
        <div className={classes.scrollItem}>500</div>
        <div className={classes.scrollItem}>600</div>
        <div className={classes.scrollItem}>700</div>
        <div className={classes.scrollItem}>800</div>
        <div className={classes.scrollItem}>900</div>
        <div className={classes.scrollItem}>1000</div>
        <div className={classes.scrollItem}>1100</div>
        <div className={classes.scrollItem}>1200</div>
    </div>
    <Tabs value={activeTab}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />} onClick={() => setActiveTab('gallery')}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />} onClick={() => setActiveTab('messages')}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />} onClick={() => setActiveTab('settings')}>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="tab4" onClick={() => setActiveTab('tab4')}>
          Tab Four
        </Tabs.Tab>
        <Tabs.Tab value="tab5" onClick={() => setActiveTab('tab5')}>
          Tab Five
        </Tabs.Tab>
        <Tabs.Tab value="tab6" onClick={() => setActiveTab('tab6')}>
          Tab Six
        </Tabs.Tab>
        <Tabs.Tab value="tab7" onClick={() => setActiveTab('tab7')}>
          Tab Seven
        </Tabs.Tab>
        <Tabs.Tab value="tab8" onClick={() => setActiveTab('tab8')}>
          Tab Eight
        </Tabs.Tab>
        <Tabs.Tab value="tab9" onClick={() => setActiveTab('tab9')}>
          Tab Nine
        </Tabs.Tab>
        <Tabs.Tab value="tab10" onClick={() => setActiveTab('tab10')}>
          Tab Ten
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        <Group mt="md">
          <Button>Default</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="light">Light</Button>
          <Button variant="subtle">Subtle</Button>
        </Group>
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>

      <Tabs.Panel value="tab4">
        Tab Four content
      </Tabs.Panel>

      <Tabs.Panel value="tab5">
        Tab Five content
      </Tabs.Panel>

      <Tabs.Panel value="tab6">
        Tab Six content
      </Tabs.Panel>

      <Tabs.Panel value="tab7">
        Tab Seven content
      </Tabs.Panel>

      <Tabs.Panel value="tab8">
        Tab Eight content
      </Tabs.Panel>

      <Tabs.Panel value="tab9">
        Tab Nine content
      </Tabs.Panel>

      <Tabs.Panel value="tab10">
        Tab Ten content
      </Tabs.Panel>
    </Tabs>
    </>
  );
}

export default TabsPage;
