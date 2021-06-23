import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { tbsA } from "./TabLists";
import { Auth } from "./Sections";
import { Users } from "./Sections/Users";

const primaryTabList = tbsA.map(({ name }) => <Tab key={name}>{name}</Tab>);

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
