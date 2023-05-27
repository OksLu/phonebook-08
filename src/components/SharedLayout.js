import { Suspense } from 'react';
import { NavBar } from './NavBar/NavBar';
import Loader from './Loader/Loader';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
