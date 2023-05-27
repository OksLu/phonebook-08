import { Link } from 'react-router-dom';
import css from './NavBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { logout } from 'redux/auth/authApi';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <nav className={css.header}>
      <div>
        <Link to="/" className={css.navItem}>
          Home{' '}
        </Link>
        <Link to="contacts" className={css.navItem}>
          Contacts
        </Link>
      </div>
      {isLoggedIn ? (
        <button className={css.navBtn} onClick={() => dispatch(logout())}>
          <Link to="/">Log Out</Link>
        </button>
      ) : (
        <div className={css.btnContainer}>
          <button className={css.navBtn}>
            <Link to="login">Log In</Link>
          </button>
          <button className={css.navBtn}>
            <Link to="register">New account</Link>
          </button>
        </div>
      )}
    </nav>
  );
};
