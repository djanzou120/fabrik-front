import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { usersTabs } from "../TabLists";

const userList = usersTabs.map(({ name }) => <Tab key={name}>{name}</Tab>);

export const Users = (
  <TabPanel>
    <Tabs className="flex" forceRenderTabPanel>
      <TabList className="flex flex-col text-gray-500">{userList}</TabList>
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
