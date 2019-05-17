import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routesMap from './routesMap';
import { CapabilityConsumer } from '../providers/capabilityContext';
import UserNotFound from '../views/userNotFound/UserNotFound';

const Routes = () => (
  <main>
    <CapabilityConsumer>
      {({ isError, isLoading }) =>
        (isLoading ? (
          <div>Verifica utente...</div>
        ) : (
          <>
            <Switch>
              {!isError ? (
                <Route exact path={routesMap.home.path} component={routesMap.home.component} />
              ) : (
                <Route exact path={routesMap.home.path} component={UserNotFound} />
              )}
              <Route path={routesMap.dashboard.path} component={routesMap.dashboard.component} />
              <Route path={routesMap.timesheet.path} component={routesMap.timesheet.component} />
              <Route path={routesMap.userCreate.path} component={routesMap.userCreate.component} />
              <Route
                path={routesMap.userRequest.path}
                component={routesMap.userRequest.component}
              />
              <Route component={routesMap.notfound.component} />
              <Route path={routesMap.notfound.path} component={routesMap.notfound.component} />
            </Switch>
            <Route
              exact
              path={routesMap.unauthorized.path}
              component={routesMap.unauthorized.component}
            />
            <Route
              exact
              path={routesMap.userPosted.path}
              component={routesMap.userPosted.component}
            />
          </>
        ))
      }
    </CapabilityConsumer>
  </main>
);

// TODO: Protected route sample: <Route path="/secret" component={withAuth(Secret)}

export default Routes;
