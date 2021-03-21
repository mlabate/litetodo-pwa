import React from "react";
import { Link } from "react-router-dom";

import {
  Archive,
  Home,
  CheckCircle,
  Clock,
  Bell,
  Settings
} from "react-feather";
import "./styles.scss";

const options = {
  home: {
    label: "Home",
    icon: <Home />,
    key: "home",
    path: "/"
  },
  toDo: {
    label: "Tasks to do",
    icon: <Clock />,
    key: "toDo",
    path: "/tasks-to-do"
  },
  done: {
    label: "Done Tasks",
    icon: <CheckCircle />,
    key: "done",
    path: "/done-tasks"
  },
  archived: {
    label: "Archived Tasks",
    icon: <Archive />,
    key: "archived",
    path: "/archived"
  },
  notifications: {
    label: "Notifications",
    icon: <Bell />,
    key: "notifications",
    path: "/notifications"
  },
  settings: {
    label: "Settings",
    icon: <Settings />,
    key: "settings",
    path: "/settings"
  }
};

const SideBar = ({ activeTab }) => {
  const renderOptions = () => {
    const opts = Object.keys(options);

    const menu = opts.map(option => {
      const { label, icon, key, path } = options[option];
      const isActive = activeTab === key;

      return (
        <Link to={path} key={key}>
          <li id={key} className={`menu-option ${isActive ? "active" : ""}`}>
            {icon}
            <span>{label}</span>
          </li>
        </Link>
        );
    });

    return menu;
  };

  return (
    <aside className="sidebar">
      <h2>LiteTODO</h2>
      <ul className="menu">{renderOptions()}</ul>
    </aside>
  );
};

export default SideBar;
