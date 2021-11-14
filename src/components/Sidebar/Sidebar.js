import React from "react";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListIcon from "@mui/icons-material/List";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

// Importing css
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* {Twitter Icon} */}
      <TwitterIcon className="sidebar__twitterIcon" />
      {/* {SidebarOptions} */}
      <SidebarOptions active text="Home" Icon={HomeIcon} />
      <SidebarOptions text="Explore" Icon={SearchIcon} />
      <SidebarOptions text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOptions text="Messages" Icon={MailOutlineIcon} />
      <SidebarOptions text="Bookmark" Icon={BookmarkBorderIcon} />
      <SidebarOptions text="Lists" Icon={ListIcon} />
      <SidebarOptions text="Profile" Icon={PersonOutlineIcon} />
      <SidebarOptions text="More" Icon={MoreHorizIcon} />

      {/* {Tweets Button} */}
      <Button variant="outlined" className="sidebar__button" fullWidth>
        Tweet
      </Button>
      {/* {UserInfo} */}
    </div>
  );
}

export default Sidebar;
