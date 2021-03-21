import React, { useContext } from "react";
import PropTypes from "prop-types";
import SideBar from "../SideBar";
import "./styles.scss";
import AppContext from "../../context/AppContext";

const Layout = ({ children, activeTab, pageTitle }) => {
  const {
    state: { theme, mode }
  } = useContext(AppContext);

  // useEffect(() => {
  //   const sidebar = document.getElementById(activeTab);
  //   sidebar.scrollIntoView();
  // }, []);

  return (
    <div
      id="main-wrapper"
      data-theme={theme}
      data-mode={mode}
      className="layout"
    >
      <SideBar activeTab={activeTab} />
      <div className="container">
        <h1 className="app-title">{pageTitle}</h1>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  activeTab: PropTypes.string.isRequired,
  pageTitle: PropTypes.string
};

Layout.defaultProps = {
  children: {},
  pageTitle: "LiteTODO"
};
export default Layout;
