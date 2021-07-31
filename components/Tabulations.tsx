import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { primaryTabs } from "./TabLists";
import { Auth, Users, Profile, Image, Videos } from "./TabPanels";

const primaryTabList = primaryTabs.map(({ name, icon }) => (
  <Tab key={name}>
    <div className="flex md:w-28">
      {icon} {name}
    </div>
  </Tab>
));

const Tabulations = () => {
  return (
    <div className="border-1 md:px-5 px-3 pt-8 pb-14 mt-20 shadow-lg rounded-xl w-full transition transition-all duration-200">
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList className="md:flex items-center justify-between mb-20">
          <div className="text-5xl pr-20 pb-3 md:pb-0s">Fabrik</div>
          <div className="">{primaryTabList}</div>
        </TabList>
        {Auth}
        {Users}
        {Profile}
        {Image}
        {Videos}
      </Tabs>
    </div>
  );
};

export default Tabulations;
