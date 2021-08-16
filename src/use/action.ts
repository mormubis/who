import { useContext } from 'react';

import Context from '../Context';

function useAction(action: 'login'): Login;
function useAction(action: 'logout'): Logout;
function useAction(action: 'signup'): Signup;
function useAction(action: 'login' | 'logout' | 'signup'): unknown {
  const context = useContext(Context);

  return context[action];
}

export default useAction;
