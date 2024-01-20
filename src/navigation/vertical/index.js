import {  Home, Layers } from "react-feather";

export default [
  {
    id: "home",
    title: "Student Dashboard",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: "Courses",
    icon: <Layers size={20} />,
    navLink: "/second-page",
  },
];
