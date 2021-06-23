import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { profileTabs } from "../TabLists";

const profileList = profileTabs.map(({ name }) => <Tab key={name}>{name}</Tab>);

export const Profile = (
  <TabPanel>
    <Tabs forceRenderTabPanel>
      <TabList>{profileList}</TabList>
      <TabPanel>
        <p>content</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
);
