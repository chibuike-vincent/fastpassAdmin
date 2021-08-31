import React from "react";
import {Route, Redirect} from 'react-router-dom'


import MainLayout from "../components/MainLayout";

const DashboardRoute = ({ component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout>
        <Component {...props} />
      </MainLayout> 
      )}
    />
  );
};
export default DashboardRoute;