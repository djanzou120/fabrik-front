import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { usersTabs } from "../TabLists";

const userList = usersTabs.map(({ name }) => <Tab key={name}>{name}</Tab>);

export const Users = (
  <TabPanel>
    <Tabs forceRenderTabPanel>
      <TabList>{userList}</TabList>
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
