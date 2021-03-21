/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useContext } from "react";
import Helmet from "react-helmet";
import AppContext from "../../context/AppContext";
import Layout from "../../components/Layout";
import "./styles.scss";

const themes = [
  {
    label: "Primary",
    class: "primary",
    key: "primary"
  },
  {
    label: "Pink",
    class: "pink",
    key: "pink"
  },
  {
    label: "Black",
    class: "black",
    key: "black"
  },
  {
    label: "Green",
    class: "green",
    key: "green"
  },
  {
    label: "Red",
    class: "red",
    key: "red"
  },
  {
    label: "Yellow",
    class: "yellow",
    key: "yellow"
  }
];

const modes = [
  {
    label: "Light",
    class: "light",
    key: "light"
  },
  {
    label: "Dark",
    class: "dark",
    key: "dark"
  } 
];

const Settings = () => {
  const {
    state: { theme: currentTheme, mode: currentMode },
    setTheme,
    setMode
  } = useContext(AppContext);

  const changeTheme = (theme) => {
    const root = document.getElementById("main-wrapper");
    root.dataset.theme = theme;
    setTheme(theme);
  };

  const changeMode = (mode) => {
    const root = document.getElementById("main-wrapper");
    root.dataset.mode = mode;
    setMode(mode);
  };

  const renderMenu = (menuTitle, options, currentActive, changeFunction) => (
    <section className="section">
      <h2>{menuTitle}</h2>
      <ul className="section-menu">
        {options.map((option) => {
            const isActive = currentActive === option.key;

            return (
              <li
                className="menu-option"
                key={option.key}
                onClick={() => changeFunction(option.key)}
                onKeyPress={() => {}}
                tabIndex={0}
                role="button"
              >
                <div
                  className={`color ${option.class} ${
                    isActive ? "active" : ""
                  }`}
                />
                <span>{option.label}</span>
              </li>
            );
          })}
      </ul>
    </section>
    );

  return (
    <>
      <Helmet>
        <title>LiteTODO | Settings</title>
      </Helmet>
      <Layout activeTab="settings" pageTitle="Settings">
        {renderMenu("Themes", themes, currentTheme, changeTheme)}
        {renderMenu("Modes", modes, currentMode, changeMode)}
      </Layout>
    </>
  );
};

export default Settings;
