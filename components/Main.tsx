import React from "react";
import Tabs, { TabPane } from "rc-tabs";
import { MdSecurity } from "react-icons/md";
import { BsFilePost } from "react-icons/bs";

const Main = () => {
  const tbs = [
    {
      name: "Auth",
      icon: <MdSecurity size={27} className="mr-2" />,
      component: <div>hello</div>,
    },
    {
      name: "Users",
      icon: <BsFilePost size={27} className="mr-2" />,
      component: <div>User</div>,
    },
    {
      name: "Profile",
      icon: <MdSecurity size={27} className="mr-2" />,
      component: <div>Profile</div>,
    },
    {
      name: "Images",
      icon: <MdSecurity size={27} className="mr-2" />,
      component: <div>Images</div>,
    },
    {
      name: "Videos",
      icon: <MdSecurity size={27} className="mr-2" />,
      component: <div>Videos</div>,
    },
  ];

  const tab_pane = tbs.map(({ name, icon, component }) => (
    <TabPane
      tab={
        <div className="flex cursor-pointer">
          {icon}
          {name}
        </div>
      }
      key={name}
    >
      <div className="w-full">{component}</div>
    </TabPane>
  ));
  return (
    <div className="bg-black text-gray-200 border-2 border-gray-200 shadow-lg rounded-xl w-80 sm:w-3/5 h-96 absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Tabs
        className="p-4 flex h-full w-full"
        tabPosition="top"
        tabBarGutter={16}
      >
        {tab_pane}
      </Tabs>
    </div>
  );
};

export default Main;
