import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOptions.css";

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="header_options">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon"/>}

      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
