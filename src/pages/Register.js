import { LoginForm } from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authApi';

export const LogIn = () => {
  return <LoginForm />;
};
