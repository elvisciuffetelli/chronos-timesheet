import React, {
  createContext, useState, useContext, useEffect
} from 'react';
import { AuthenticationContext } from '@axa-fr/react-oidc-context/dist/Context';
import getMe from '../api/getMe';

const capabilityContext = createContext({
  capabilities: [],
  user: {
    name: 'string',
    lastName: 'string',
    email: 'string'
  },
  isLoading: true,
  isError: false
});
export const CapabilityConsumer = capabilityContext.Consumer;

export const CapabilityProvider = ({ children }) => {
  const { user } = useContext(capabilityContext);
  const authContext = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [contextUser, setContextUser] = useState(user);
  const [capabilities, setCapabilities] = useState([]);

  useEffect(() => {
    if (authContext.oidcUser && !authContext.isLoading) {
      getMe()
        .then(({ content }) => content)
        .then(me => {
          setContextUser(me);
          setCapabilities(me.capabilities);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(`error! ${error}`);
          setIsError(true);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
    return () => {};
  }, [authContext.isLoading, authContext.oidcUser]);

  return (
    <>
      <capabilityContext.Provider
        value={{
          user: contextUser,
          isLoading,
          isError,
          capabilities
        }}
      >
        {!isLoading && !authContext.isLoading ? children : <div>A beautiful loader here.</div>}
      </capabilityContext.Provider>
    </>
  );
};

export default capabilityContext;
