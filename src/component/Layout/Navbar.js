import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/slice/userSlice";
import "../../css/component.css";
import { toast } from "react-toastify";
import { routes } from "../../constants";
import { logoutIcon, sidebarToggleIcon } from "../../icons";

const Navbar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logout successfully !", {
      autoClose: 2000,
    });
  };

  // if (window.location.pathname.match(/^(([0-9]+:)?(\/\/)?[^\/]+\/).*$/)) {
  //   console.log("abc");
  // }
  let navPath;
  let pageName = window.location.pathname.split("/").reverse();

  if (pageName.length !== 2) {
    if (/(\d+)/.test(window.location.pathname)) {
      pageName.shift();
    }

    navPath = pageName.join(" ");
    // let temNavPath = navPath;
    // console.log("navPath.substring", temNavPath.substring(navPath.length - 4));

    if (navPath.substring(navPath.length - 4) === "ies ") {
      navPath = navPath.slice(0, navPath.length - 4) + "y";
    } else if (navPath.substring(navPath.length - 2) === "s ") {
      navPath = navPath.slice(0, navPath.length - 2);
    }
  } else {
    navPath = pageName.join(" ");
  }

  return (
    <header className="top_header_section">
      <label htmlFor="sidebar_toggel" className="sidebar_toggel_btn">
        {sidebarToggleIcon}
      </label>
      <h2 className="page_name_heading">{navPath}</h2>
      <ul className="top_navbar_nav">
        <li className="top_navbar_item">
          <Link
            className="top_navbar_logout_btn"
            to={routes.login}
            onClick={logoutHandler}
          >
            {logoutIcon}
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
