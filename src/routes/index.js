import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import DashboardRoute from "./DashboardRoute";

//Pages
import Home from "../pages/home";
import Overview from "../pages/overview";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import Users from "../pages/Users";
import Security from "../pages/security";
import CreateTenants from "../pages/createTenants";
import CreateSecurity from "../pages/createSecurity";
import Settings from "../pages/settings";
import Visitors from "../pages/visitors";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";


export default function Routes() {

  return (
    
      <div style={{ height: "100vh" }}>
        <Router>
          <Switch>
            {/* Protected routes */}
            <DashboardRoute exact path="/dashboard" component={Overview} />
            <DashboardRoute exact path="/dashboard/users" component={Users} />
            <DashboardRoute exact path="/dashboard/security" component={Security} />
            <DashboardRoute exact path="/dashboard/create_tenants" component={CreateTenants} />
            <DashboardRoute exact path="/dashboard/create_security" component={CreateSecurity} />
            <DashboardRoute exact path="/dashboard/settings" component={Settings} />
            <DashboardRoute exact path="/dashboard/visitors" component={Visitors} />

              {/* Public routes */}
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/resetpassword/:pin" component={ResetPassword} />
          </Switch>
        </Router>
      </div>
  );
}