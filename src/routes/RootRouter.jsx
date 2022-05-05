import React from "react"
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Events from "../pages/Events";
import ViewUser from "../pages/ViewUser";
import ViewEvent from "../pages/ViewEvent";

export default function RootRouter() {
  const isAuthenticated = true;
  return (
    <div className="h-screen">
      {isAuthenticated ? (
        <div className="h-screen flex">
          <Sidebar>
            <div className="flex-col flex-1 overflow-auto">
              <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/users" component={Users} />
                  <Route exact path="/events" component={Events} />
                  <Route exact path="/users/:id" component={ViewUser} />
                  <Route exact path="/events/:id" component={ViewEvent} />
              </Switch>
            </div>
          </Sidebar>
        </div>
      ) : (
        <Switch>
          <Route exact path="/" component={Login}></Route>
        </Switch>
      )}
    </div>
  )
}