import { useDispatch } from 'react-redux';
import css from '../SignUpForm/SignUpForm.module.css';
import { login } from 'redux/auth/authApi';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      login({
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  return (
    <main className={css.container}>
      <div className={css.loginCard}>
        <h2>Log In</h2>
        <form className={css.loginForm} onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            className={css.input}
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            name="password"
            className={css.input}
            type="password"
            placeholder="Password"
          />
          <button className={css.btn} type="submit">
            Let's start!
          </button>
        </form>
      </div>
    </main>
  );
};
