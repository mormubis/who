import { useContext } from 'react';

import Context from '../Context';

function useCredentials(): unknown {
  const { session } = useContext(Context);

  return session;
}

export default useCredentials;
