import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';

import type { Authentication } from './Context';
import Context from './Context';

const { Provider: ContextProvider } = Context;

type Props = {
  children: React.ReactNode;
  resolver: SessionResolver;
} & Omit<Authentication, 'session'>;

const Provider = ({ children, login, logout, resolver, signup }: Props): JSX.Element => {
  const [session, setSession] = useState<unknown>(null);

  const handleLogin = useCallback(
    async (...argv: unknown[]) => {
      setSession(await login(...argv));
    },
    [login, setSession],
  );

  const handleLogout = useCallback(
    async (...argv: unknown[]) => {
      await logout(...argv);

      setSession(null);
    },
    [logout, setSession],
  );

  const handleSignup = useCallback(
    async (...argv: unknown[]) => {
      setSession(await signup(...argv));
    },
    [signup, setSession],
  );

  const value = useMemo(
    () => ({ login: handleLogin, logout: handleLogout, session, signup: handleSignup }),
    [handleLogin, handleLogout, session, handleSignup],
  );

  useLayoutEffect(() => {
    let current = true;

    (async () => {
      const initial = await resolver();

      if (current) {
        setSession(initial);
      }
    })();

    return () => {
      current = false;
    };
  }, []);

  return <ContextProvider value={value}>{children}</ContextProvider>;
};

export default Provider;
