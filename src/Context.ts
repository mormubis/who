import { createContext } from 'react';

export type Authentication = {
  login: Login;
  logout: Logout;
  session: Session;
  signup: Signup;
};

export default createContext<Authentication>({
  login() {},
  logout() {},
  session: null,
  signup() {},
});
