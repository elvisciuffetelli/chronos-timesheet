import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { AuthenticationProvider, oidcLog } from '@axa-fr/react-oidc-context';
// import Authenticating from './components/authFlowComponents/Authenticating';
// import NotAuthorized from './components/authFlowComponents/NotAuthorized';
// import NotAuthenticated from './components/authFlowComponents/NotAuthenticated';
import history from './router/history';
import oidcConfiguration from './components/auth/configuration';
import App from './App';
import './index.scss';

import * as serviceWorker from './serviceWorker';
import { CapabilityProvider } from './providers/capabilityContext';

ReactDOM.render(
  <div>
    <Router history={history}>
      <AuthenticationProvider
        configuration={oidcConfiguration}
        // loggerLevel={oidcLog.DEBUG}
        // notAuthenticated={NotAuthenticated}
        // notAuthorized={NotAuthorized}
        // authenticating={Authenticating}
        isEnabled
      >
        <CapabilityProvider>
          <App />
        </CapabilityProvider>
      </AuthenticationProvider>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
