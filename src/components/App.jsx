import { Suspense, lazy, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getRefresh } from '../redux/operations';

import PrivateGuard from '../guards/PrivateGuard';
import PublicGuards from '../guards/PublicGuards';
import Layout from 'page/Layout';

const Home = lazy(() => import('../page/Home/Home'));
const Register = lazy(() => import('../page/Register/Register'));
const Login = lazy(() => import('../page/Login/Login'));
const Contacts = lazy(() => import('../page/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  return (
    <Suspense>
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
