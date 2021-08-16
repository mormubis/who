import useAction from './action';

function useLogin(): Login {
  return useAction('login');
}

export default useLogin;
