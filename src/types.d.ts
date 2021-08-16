type Login = (...argv: unknown[]) => Session;
type Logout = (...argv: unknown[]) => void;
type Session = unknown;
type SessionResolver = () => Session;
type Signup = (...argv: unknown[]) => Session;
