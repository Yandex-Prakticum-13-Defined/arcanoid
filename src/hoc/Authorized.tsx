import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { useAuth } from '../hook/useAuth';
import { ERoutes } from '../utils/constants/routes';

interface IRequireAuth {
  children: JSX.Element;
}

const Authorized: FC<IRequireAuth> = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner/>;
  }

  if (user) {
    return <Navigate to={ERoutes.START} state={{ from: location }} replace/>;
  }

  return children;
};

export default Authorized;
