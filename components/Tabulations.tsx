import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { primaryTabs } from "./TabLists";
import { Auth, Users, Profile, Image, Video } from "./TabPanels";

const primaryTabList = primaryTabs.map(({ name, icon }) => (
  <Tab key={name}>
    <div className="flex">
      {icon} {name}
    </div>
  </Tab>
));

const Tabulations = () => {
  return (
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <TabList>{primaryTabList}</TabList>
      {Auth}
      {Users}
      {Profile}
      {Image}
      {Video}
    </Tabs>
  );
};

export default Tabulations;
