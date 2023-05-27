import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Suspense, lazy, useEffect } from 'react';
import { LogIn } from 'pages/Register';
import PublicRoute from './PublicRoute/PublicRoute';
import Contacts from 'pages/ContactsPage';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/auth/authApi';
import { LoginForm } from './LoginForm/LoginForm';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { SignUpForm } from './SignUpForm/SignUpForm';

const HomePage = lazy(() => import('../pages/HomePage'));
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
                <LoginForm />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Suspense>
                <SignUpForm />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
