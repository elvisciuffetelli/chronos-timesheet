import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { path } from '../router/routesMap';
import capabilityContext from '../providers/capabilityContext';

export default function withCapabilities(WrappedComponent, requiredCapabilities = []) {
  return function ConditionalCapabilityComponent(props) {
    const { capabilities } = useContext(capabilityContext);

    const check = capabilities.some(capability => requiredCapabilities.includes(capability));

    const [haveCapabilities] = useState(check);

    return (
      <React.Fragment>
        {haveCapabilities ? (
          <WrappedComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: path.notfound
            }}
          />
        )}
      </React.Fragment>
    );
  };
}
