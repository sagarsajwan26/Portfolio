import { FaTachometerAlt } from 'react-icons/fa'; // dashboard icon (FontAwesome)
import { FaTools } from 'react-icons/fa';        // skills icon
import { FaProjectDiagram } from 'react-icons/fa'; // projects icon
import { FaUserCircle } from 'react-icons/fa';   // profile icon
import { TbLogout2 } from "react-icons/tb";

export const HEADER_LIST = [
  {
    label: 'dashboard',
    to: "/admin/homepage",
    icon: FaTachometerAlt
  },
  {
    label: 'skills',
    to: "/admin/homepage/skills",
    icon: FaTools
  },
  {
    label: 'projects',
    to: "/admin/homepage/projects",
    icon: FaProjectDiagram
  },
  {
    label: 'profile',
    to: "/admin/homepage/profile",
    icon: FaUserCircle
  },
 
];


export const SKILL_CATEGORY_OPTION=['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Languages', 'Frameworks', 'Other']