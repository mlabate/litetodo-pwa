import React, { useContext } from "react";
import Helmet from "react-helmet";
import AppContext from "../../context/AppContext";
import List from "../../components/List";
import Layout from "../../components/Layout";

import "./styles.scss";

const DoneTasks = () => {
  const {
    state: { doneList }
  } = useContext(AppContext);
  return (
    <>
      <Helmet>
        <title>LiteTODO | Done Tasks</title>
      </Helmet>
      <Layout activeTab="done" pageTitle="Done Tasks">
        <List title="Done Task" listType="doneList" list={doneList} />
      </Layout>
    </>
  );
};

export default DoneTasks;
