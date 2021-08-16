import React from 'react';

import useCredentials from '../use/credentials';

function withAuthentication<Props>(
  Authenticated: React.ComponentType<Props>,
  Unauthenticated: React.ComponentType<Props> = () => null,
): React.ComponentType<Props> {
  const leftDisplayName = Authenticated.displayName ?? Authenticated.name;
  const rightDisplayName = Unauthenticated.displayName ?? Unauthenticated.name;

  const Authentication = (props: Props): JSX.Element | null => {
    const credentials = useCredentials();

    return credentials ? <Authenticated {...props} /> : <Unauthenticated {...props} />;
  };

  Authentication.displayName = `Authenticated(${leftDisplayName}/${rightDisplayName})`;

  return Authentication;
}

export default withAuthentication;
