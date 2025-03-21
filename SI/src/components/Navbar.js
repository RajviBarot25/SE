import React from "react";
import { Sidebar, SidebarItem } from "../style.js"; // Add `.js` extension

import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InboxIcon from "@mui/icons-material/Inbox";
import HistoryIcon from "@mui/icons-material/History";
import HelpIcon from "@mui/icons-material/Help";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const Navbar = () => {
  return (
    <Sidebar>
      <h2>Logo</h2>
      <SidebarItem>
        <DashboardIcon /> Dashboard
      </SidebarItem>
      <SidebarItem>
        <SchoolIcon /> Hospitals
      </SidebarItem>
      <SidebarItem>
        <CalendarTodayIcon /> Rooms
      </SidebarItem>
      <SidebarItem>
        <InboxIcon /> Racks
      </SidebarItem>
      <SidebarItem>
        <HistoryIcon /> Bins
      </SidebarItem>
      <SidebarItem>
        <HelpIcon /> Shop
      </SidebarItem>
      <SidebarItem>
        <LibraryBooksIcon /> History
      </SidebarItem>
      <SidebarItem>
        <LibraryBooksIcon /> Logout
      </SidebarItem>
    </Sidebar>
  );
};

export default Navbar;
