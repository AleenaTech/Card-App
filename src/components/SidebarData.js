import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contactUs",
    icon: <MdIcons.MdContactMail />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/aboutUs",
    icon: <MdIcons.MdInfoOutline />,
    cName: "nav-text",
  },
  {
    title: "Careers",
    path: "/careers",
    icon: <MdIcons.MdWork />,
    cName: "nav-text",
  },
  {
    title: "Help",
    path: "/help",
    icon: <MdIcons.MdHelpOutline />,
    cName: "nav-text",
  },
];
