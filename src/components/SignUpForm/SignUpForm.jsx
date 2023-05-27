import { useDispatch } from 'react-redux';
import css from './SignUpForm.module.css';
import { register } from 'redux/auth/authApi';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(register(newUser));
  };

  return (
    <main className={css.container}>
      <div className={css.loginCard}>
        <h2>Sign Up</h2>
        <h3>It's quick & simple</h3>
        <form className={css.loginForm} onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            className={css.input}
            type="name"
            placeholder="Name"
            name="name"
          />
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
          <button type="submit" className={css.btn}>
            JOIN NOW!
          </button>
        </form>
      </div>
    </main>
  );
};
