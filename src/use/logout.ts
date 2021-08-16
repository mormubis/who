import useAction from './action';

function useLogout(): Logout {
  return useAction('logout');
}

export default useLogout;
