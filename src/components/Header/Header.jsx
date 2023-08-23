import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          {!isLoggedIn ? (
            <>
              <NavLink to="/register" className={css.link}>
                Register
              </NavLink>
              <NavLink to="/login" className={css.link}>
                Login
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/contacts" className={css.link}>
                Contacts
              </NavLink>
              <UserMenu />
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
