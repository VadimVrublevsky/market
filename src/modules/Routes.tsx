import React from "react";
import { Route, Switch } from "react-router";

/** Routes */
import { loginRoutePath } from "./route-paths";

/** Components */
import Login from "./login";

interface RoutesProps {}

const Routes: React.FunctionComponent<RoutesProps> = () => {
  return (
    <Switch>
      <Route path={loginRoutePath} component={Login} />
    </Switch>
  );
};

export default Routes;
