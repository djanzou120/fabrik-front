import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { profileTabs } from "../TabLists";

const profileList = profileTabs.map(({ name, icon }) => (
  <Tab key={name}>
    <div className="custom_tab">
      <div className="md:mr-20">{name}</div>
      <div>{icon}</div>
    </div>
  </Tab>
));

export const Profile = (
  <TabPanel>
    <Tabs className="flex" forceRenderTabPanel>
      <TabList className="custom_tabList">{profileList}</TabList>
      <TabPanel>
        <p>content</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
);
