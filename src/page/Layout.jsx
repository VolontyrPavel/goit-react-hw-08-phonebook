import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getRefresh } from '../redux/operations';

import Header from 'components/Header/Header';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
