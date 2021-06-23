import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { primaryTabs } from "./TabLists";
import { Auth, Users } from "./Sections";

const primaryTabList = primaryTabs.map(({ name }) => (
  <Tab key={name}>{name}</Tab>
));

const Tabulations = () => {
  return (
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <TabList>{primaryTabList}</TabList>
      {Auth}
      {Users}
    </Tabs>
  );
};

export default Tabulations;
