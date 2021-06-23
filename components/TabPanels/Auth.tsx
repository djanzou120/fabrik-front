import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { authTabs } from "../TabLists";
import { TabContents } from "../TabContents";

const authList = authTabs.map(({ name, icon }) => (
  <Tab key={name}>
    <div className="custom_tab">
      <div className="md:mr-20">{name}</div>
      <div>{icon}</div>
    </div>
  </Tab>
));

export const Auth = (
  <TabPanel>
    <Tabs className="flex" forceRenderTabPanel>
      <TabList className="custom_tabList">{authList}</TabList>
      <TabPanel>
        <TabContents />
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
