import React from "react";
import {
  ShieldCheckIcon,
  UserGroupIcon,
  IdentificationIcon,
  PhotographIcon,
  VideoCameraIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

export const primaryTabs = [
  {
    name: "Auth",
    icon: <ShieldCheckIcon width={25} className="md:mr-2" />,
    component: <div>hello</div>,
  },
  {
    name: "Users",
    icon: <UserGroupIcon width={25} className="mr-2" />,
    component: <div>User</div>,
  },
  {
    name: "Profile",
    icon: <IdentificationIcon width={25} className="mr-2" />,
    component: <div>Profile</div>,
  },
  {
    name: "Images",
    icon: <PhotographIcon width={25} className="mr-2" />,
    component: <div>Images</div>,
  },
  {
    name: "Videos",
    icon: <VideoCameraIcon width={25} className="mr-2" />,
    component: <div>Videos</div>,
  },
];

export const authTabs = [
  {
    name: "Register",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Register</div>,
  },
  {
    name: "Login",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Login</div>,
  },
  {
    name: "Forgot",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Forgot</div>,
  },
  {
    name: "Reset",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Reset</div>,
  },
  {
    name: "Logout",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Logout</div>,
  },
];

export const usersTabs = [
  {
    name: "Get all",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Register</div>,
  },
  {
    name: "Get by Id",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Register</div>,
  },
  {
    name: "Create",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Create</div>,
  },
  {
    name: "Update",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Update</div>,
  },
  {
    name: "Delete",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Delete</div>,
  },
];

export const profileTabs = [
  {
    name: "Get my info",
    icon: <ChevronRightIcon width={20} />,
    component: <div>Get my info</div>,
  },
];

export const imageTabs = [
  {
    name: "All images",
    icon: <ChevronRightIcon width={20} />,
    component: <div>content</div>,
  },
];

export const videoTabs = [
  {
    name: "All videos",
    icon: <ChevronRightIcon width={20} />,
    component: <div>content</div>,
  },
];
