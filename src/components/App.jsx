import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Suspense, lazy, useEffect } from 'react';
import PublicRoute from './PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/auth/authApi';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  });
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Suspense>
                <LoginPage />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Suspense>
                <RegisterPage />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
