import {
  MdFeaturedVideo,
  MdImage,
  MdImageAspectRatio,
  MdPerson,
  MdVerifiedUser,
} from "react-icons/md";
import React from "react";

export const tbsA = [
  {
    name: "Auth",
    icon: <MdVerifiedUser size={27} className="mr-2" />,
    component: <div>hello</div>,
  },
  {
    name: "Users",
    icon: <MdPerson size={27} className="mr-2" />,
    component: <div>User</div>,
  },
  {
    name: "Profile",
    icon: <MdImage size={27} className="mr-2" />,
    component: <div>Profile</div>,
  },
  {
    name: "Images",
    icon: <MdImageAspectRatio size={27} className="mr-2" />,
    component: <div>Images</div>,
  },
  {
    name: "Videos",
    icon: <MdFeaturedVideo size={27} className="mr-2" />,
    component: <div>Videos</div>,
  },
];

export const tbsB = [
  {
    name: "Register",
    component: <div>Register</div>,
  },
  {
    name: "Login",
    component: <div>Login</div>,
  },
  {
    name: "Forgot",
    component: <div>Forgot</div>,
  },
  {
    name: "Reset",
    component: <div>Reset</div>,
  },
  {
    name: "Logout",
    component: <div>Logout</div>,
  },
];

export const tbsC = [
  {
    name: "Register",
    component: <div>Register</div>,
  },
  {
    name: "Login",
    component: <div>Login</div>,
  },
  {
    name: "Forgot",
    component: <div>Forgot</div>,
  },
  {
    name: "Reset",
    component: <div>Reset</div>,
  },
  {
    name: "Logout",
    component: <div>Logout</div>,
  },
];
