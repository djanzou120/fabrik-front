import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { imageTabs } from "../TabLists";

const imageList = imageTabs.map(({ name }) => <Tab key={name}>{name}</Tab>);

export const Image = (
  <TabPanel>
    <Tabs className="flex" forceRenderTabPanel>
      <TabList className="flex flex-col text-gray-500">{imageList}</TabList>
      <TabPanel>
        <p>content</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
);
