import { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PrivateGuard from '../guards/PrivateGuard';
import PublicGuards from '../guards/PublicGuards';

import { selectLoading, selectError } from 'redux/selectors';

const Layout = lazy(() => import('../page/Layout'));
const Home = lazy(() => import('../page/Home/Home'));
const Register = lazy(() => import('../page/Register'));
const Login = lazy(() => import('../page/Login'));
const Contacts = lazy(() => import('../page/Contacts'));

export const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Suspense>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicGuards>
                <Register />
              </PublicGuards>
            }
          />
          <Route
            path="/login"
            element={
              <PublicGuards>
                <Login />
              </PublicGuards>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateGuard>
                <Contacts />
              </PrivateGuard>
            }
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
