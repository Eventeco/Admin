import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import ViewUser from "../pages/ViewUser";
import ViewEvent from "../pages/ViewEvent";
import * as ROUTES from "../constants/routes";
import instance from "../axios";
import AllEvents from "../pages/AllEvents";
import PastEvents from "../pages/CompletedEvents";
import UpcomingEvents from "../pages/UpcomingEvents";

export default function RootRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    instance
      .get("login-status")
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <div className="h-screen">
      {isAuthenticated ? (
        <div className="h-screen flex">
          <Sidebar>
            <div className="flex-col flex-1 overflow-auto">
              <Switch>
                <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
                <Route exact path={ROUTES.USERS} component={Users} />
                <Route exact path={ROUTES.ALL_EVENTS} component={AllEvents} />
                <Route exact path={ROUTES.COMPLETED_EVENTS} component={PastEvents} />
                <Route exact path={ROUTES.UPCOMING_EVENTS} component={UpcomingEvents} />
                <Route exact path={ROUTES.USER} component={ViewUser} />
                <Route exact path={ROUTES.EVENT} component={ViewEvent} />
              </Switch>
            </div>
          </Sidebar>
        </div>
      ) : (
        <Switch>
          <Route exact path="/">
            <Login setIsAuthenticated={setIsAuthenticated} />
          </Route>
        </Switch>
      )}
    </div>
  );
}
