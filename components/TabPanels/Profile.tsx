import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { profileTabs } from "../TabLists";

const profileList = profileTabs.map(({ name }) => <Tab key={name}>{name}</Tab>);

export const Profile = (
  <TabPanel>
    <Tabs className="flex" forceRenderTabPanel>
      <TabList className="flex flex-col text-gray-500">{profileList}</TabList>
      <TabPanel>
        <p>content</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
);
