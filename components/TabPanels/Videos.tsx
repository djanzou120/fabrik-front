import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { videoTabs } from "../TabLists";

const videoList = videoTabs.map(({ name }) => <Tab key={name}>{name}</Tab>);

export const Video = (
  <TabPanel>
    <Tabs className="flex" forceRenderTabPanel>
      <TabList className="flex flex-col">{videoList}</TabList>
      <TabPanel>
        <p>content</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
);
