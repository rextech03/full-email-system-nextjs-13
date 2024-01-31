import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Onboarding",
    href: "/onboarding",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Note Book",
    href: "/projects",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Courses",
    href: "/courses",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
  {
    label: "Settings",
    href: "/settings",
    
    icon: <Cog6ToothIcon className="w-6 h-6" />,
  },
];