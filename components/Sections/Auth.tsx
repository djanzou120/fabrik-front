import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { authTabs } from "../TabLists";
const authList = authTabs.map(({ name }) => <Tab key={name}>{name}</Tab>);

export const Auth = (
  <TabPanel>
    <Tabs forceRenderTabPanel>
      <TabList>{authList}</TabList>
      <TabPanel>
        <p>lorem</p>
      </TabPanel>
      <TabPanel>
        <p>lorem</p>
      </TabPanel>
      <TabPanel>
        <p>lorem</p>
      </TabPanel>
      <TabPanel>
        <p>lorem</p>
      </TabPanel>
      <TabPanel>
        <p>lorem</p>
      </TabPanel>
    </Tabs>
  </TabPanel>
);
