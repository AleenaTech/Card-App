import React from "react";
import { IconType } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import {
    MdContactMail,
    MdInfoOutline,
    MdWork,
    MdHelpOutline,
} from "react-icons/md";

interface SidebarItem {
    title: string;
    path: string;
    icon: JSX.Element;
    cName: string;
}

export const SidebarData: SidebarItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Contact Us",
        path: "/contactUs",
        icon: <MdContactMail />,
        cName: "nav-text",
    },
    {
        title: "About Us",
        path: "/aboutUs",
        icon: <MdInfoOutline />,
        cName: "nav-text",
    },
    {
        title: "Careers",
        path: "/careers",
        icon: <MdWork />,
        cName: "nav-text",
    },
    {
        title: "Help",
        path: "/help",
        icon: <MdHelpOutline />,
        cName: "nav-text",
    },
];
