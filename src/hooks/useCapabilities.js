import { useState, useEffect, useContext } from 'react';
import capabilityProvider from '../providers/capabilityContext';

export default function useCapabilities(requiredCapabilities = []) {
  const [hasCapabilities, sethasCapabilities] = useState(false);
  const capabilityContext = useContext(capabilityProvider);

  useEffect(() => {
    sethasCapabilities(
      capabilityContext.capabilities.some(capability => requiredCapabilities.includes(capability))
    );
    return () => hasCapabilities;
  }, [capabilityContext.capabilities]);

  return hasCapabilities;
}
