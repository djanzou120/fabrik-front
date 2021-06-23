import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { videoTabs } from "../TabLists";

const videoList = videoTabs.map(({ name, icon }) => (
  <Tab key={name}>
    <div className="custom_tab">
      <div className="md:mr-20">{name}</div>
      <div>{icon}</div>
    </div>
  </Tab>
));

export const Video = (
  <TabPanel>
    <Tabs className="flex" forceRenderTabPanel>
      <TabList className="custom_tabList">{videoList}</TabList>
      <TabPanel>
        <p>content</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
);
