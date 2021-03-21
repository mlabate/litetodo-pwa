import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
    <>
      <h1>404 Not Found Page</h1>
      <p>This page doesn't exists</p>
      <Link to="/">Go Home</Link>
    </>
  </>
);

export default NotFound;
