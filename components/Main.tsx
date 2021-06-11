import React from "react";
import Tabs, { TabPane } from "rc-tabs";
import { MdSecurity } from "react-icons/md";
import { BsFilePost } from "react-icons/bs";

const Main = () => {
  return (
    <div className="bg-white shadow-lg bg-gray-50 rounded-md w-80 sm:w-3/5 h-96 absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Tabs className="option-modal-tabs" tabPosition="left" tabBarGutter={16}>
        <TabPane
          tab={
            <div className="flex border">
              <MdSecurity size={27} className="mr-2" />
              Authentication
            </div>
          }
          key="authentication"
        >
          first
        </TabPane>
        <TabPane
          tab={
            <div className="flex border">
              <BsFilePost size={27} className="mr-2" /> Post
            </div>
          }
          key="post"
        >
          second
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Main;
