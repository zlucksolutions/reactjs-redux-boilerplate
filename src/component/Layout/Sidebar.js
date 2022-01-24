import React from "react";
import { Link } from "react-router-dom";
import "../../css/component.css";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import { routes } from "../../constants";
import {
  dashboardIcon,
  leadIcon,
  sidebarSmallIcon,
  userIcon,
} from "../../icons";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebar_container">
      <Link
        to={routes.dashboard}
        className={`sidebar_logo ${
          pathname.match(/^.*dashboard.*$/) && "active"
        } `}
      >
        <img src={Logo} alt="sangini logo" className="full_sidebar_logo" />
        {sidebarSmallIcon}
      </Link>
      <ul className="sidebar_nav">
        <li className="sidebar_item">
          <Link
            className={`sidebar_link ${
              pathname.match(/^.*dashboard.*$/) && "active"
            } `}
            to={routes.dashboard}
          >
            {dashboardIcon}
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="sidebar_item">
          <Link
            className={`sidebar_link ${
              pathname.match(/^.*users.*$/) && "active"
            } `}
            to={routes.users}
          >
            {userIcon}
            <span>Users</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
