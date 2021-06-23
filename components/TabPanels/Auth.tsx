import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { authTabs } from "../TabLists";
const authList = authTabs.map(({ name }) => <Tab key={name}>{name}</Tab>);

export const Auth = (
  <TabPanel>
    <Tabs className="flex" forceRenderTabPanel>
      <TabList className="flex flex-col text-gray-500 border h-full">
        {authList}
      </TabList>
      <TabPanel>
        <p>a</p>
      </TabPanel>
      <TabPanel>
        <p>b</p>
      </TabPanel>
      <TabPanel>
        <p>c</p>
      </TabPanel>
      <TabPanel>
        <p>d</p>
      </TabPanel>
      <TabPanel>
        <p>e</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
);
