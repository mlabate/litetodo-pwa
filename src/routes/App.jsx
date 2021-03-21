import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppContext from "../context/AppContext";

import useInitialState from "../hooks/useInitialState";

import {
  NotFound,
  Home,
  Notifications,
  TasksToDo,
  DoneTasks,
  Archived,
  Settings
} from "../containers";

const routes = [
  {
    key: "notifications",
    path: "/notifications",
    component: Notifications
  },
  {
    key: "tasksToDo",
    path: "/tasks-to-do",
    component: TasksToDo
  },
  {
    key: "doneTasks",
    path: "/done-tasks",
    component: DoneTasks
  },
  {
    key: "archived",
    path: "/archived",
    component: Archived
  },
  {
    key: "settings",
    path: "/settings",
    component: Settings
  }
];

const App = () => {
  const initialState = useInitialState();

  return (
    <BrowserRouter>
      <Switch>
        <AppContext.Provider value={initialState}>
          <Route exact path="/" component={Home} />
          {routes.map((route) => (
            <Route
              key={route.key}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </AppContext.Provider>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
