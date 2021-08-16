import useAction from './action';

function useSignup(): Signup {
  return useAction('signup');
}

export default useSignup;
