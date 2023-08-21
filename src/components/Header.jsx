import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';
import { UserMenu } from 'components/UserMenu';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {!isLoggedIn ? (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <UserMenu />
        </>
      )}
    </nav>
  );
};

export default Header;
