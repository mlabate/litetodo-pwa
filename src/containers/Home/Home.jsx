import React from "react";
import Helmet from "react-helmet";
import TodoList from "../../components/TodoList";
import Layout from "../../components/Layout";

const Home = () => (
  <Layout activeTab="home">
    <Helmet>
      <title>LiteTODO | Home</title>
    </Helmet>
    <TodoList />
  </Layout>
);

export default Home;
