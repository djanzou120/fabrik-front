import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { imageTabs } from "../TabLists";

const imageList = imageTabs.map(({ name }) => <Tab key={name}>{name}</Tab>);

export const Image = (
  <TabPanel>
    <Tabs forceRenderTabPanel>
      <TabList>{imageList}</TabList>
      <TabPanel>
        <p>content</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
);
