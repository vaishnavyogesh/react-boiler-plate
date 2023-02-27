import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage/Loadable';
import { routes } from './routes';

function Router() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

Router.propTypes = {};

export default Router;
