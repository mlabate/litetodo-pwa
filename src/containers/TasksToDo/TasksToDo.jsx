import React, { useContext } from "react";
import Helmet from "react-helmet";
import AppContext from "../../context/AppContext";
import List from "../../components/List";
import Layout from "../../components/Layout";

import "./styles.scss";

const TasksToDo = () => {
  const {
    state: { toDoList }
  } = useContext(AppContext);
  return (
    <>
      <Helmet>
        <title>LiteTODO | Tasks to do</title>
      </Helmet>
      <Layout activeTab="toDo" pageTitle="Tasks to do">
        <List title="Tasks to do" listType="toDoList" list={toDoList} />
      </Layout>
    </>
  );
};

export default TasksToDo;
