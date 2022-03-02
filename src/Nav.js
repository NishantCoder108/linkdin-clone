import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./Nav.css";
import HeaderOptions from "./HeaderOptions";
import { BusinessCenter, Chat, Notifications } from "@material-ui/icons";
function Nav() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          className="header_image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"
        />
        <div className="header_search">
          {/* Search Icon */}
          <SearchOutlinedIcon />
          <input type="text" placeholder="search the title" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions avatar={true} title="me" />
      </div>
    </div>
  );
}

export default Nav;
