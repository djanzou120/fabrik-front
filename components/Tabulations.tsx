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
      <TabList className="md:flex items-center justify-between mb-5 py-3">
        <div className="text-5xl">Fabrik</div> {primaryTabList}
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
