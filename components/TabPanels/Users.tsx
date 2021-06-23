import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { usersTabs } from "../TabLists";

const userList = usersTabs.map(({ name, icon }) => (
  <Tab key={name}>
    <div className="custom_tab">
      <div className="md:mr-20">{name}</div>
      <div>{icon}</div>
    </div>
  </Tab>
));

export const Users = (
  <TabPanel>
    <Tabs className="flex" forceRenderTabPanel>
      <TabList className="custom_tabList">{userList}</TabList>
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
