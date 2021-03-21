import React, { useContext } from "react";
import Helmet from "react-helmet";
import AppContext from "../../context/AppContext";
import List from "../../components/List";
import Layout from "../../components/Layout";

import "./styles.scss";

const Archived = () => {
  const {
    state: { archivedList }
  } = useContext(AppContext);

  return (
    <>
      <Helmet>
        <title>LiteTODO | Archived</title>
      </Helmet>
      <Layout activeTab="archived" pageTitle="Archived Tasks">
        <List
          title="Archived Task"
          listType="archivedList"
          list={archivedList}
        />
      </Layout>
    </>
  );
};

export default Archived;
