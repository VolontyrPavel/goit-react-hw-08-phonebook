import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsToken } from '../redux/selectors';

import { getRefresh } from '../redux/operations';

import Header from 'components/Header';

const Layout = () => {
  const isAuth = useSelector(selectIsToken);
  const dispatch = useDispatch();

  useEffect(() => {
    !isAuth && dispatch(getRefresh());
  }, [dispatch, isAuth]);

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
