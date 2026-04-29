import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import { getDefaultRouteForRole, getLoginRouteForRole } from '../utils/routeHelpers.js';

const GuestRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={getDefaultRouteForRole(user.role)} replace />;
  }

  return children;
};

const ProtectedRoute = ({ children, allowedRoles = [], loginRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={getLoginRouteForRole(loginRole)} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to={getDefaultRouteForRole(user.role)} replace />;
  }

  return children;
};

export { GuestRoute, ProtectedRoute };
