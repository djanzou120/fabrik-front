import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { primaryTabs } from "./TabLists";
import { Auth, Users, Profile, Image, Video } from "./TabPanels";

const primaryTabList = primaryTabs.map(({ name, icon }) => (
  <Tab key={name}>
    <div className="flex md:w-28">
      {icon} {name}
    </div>
  </Tab>
));

const Tabulations = () => {
  return (
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <TabList className="md:flex items-center justify-between mb-5">
        <div className="text-5xl pr-20 pb-3 md:pb-0">Fabrik</div>
        <div className="text-gray-500">{primaryTabList}</div>
      </TabList>
      {Auth}
      {Users}
      {Profile}
      {Image}
      {Video}
    </Tabs>
  );
};

export default Tabulations;
