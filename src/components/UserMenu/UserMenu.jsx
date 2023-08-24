import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, selectUserEmail } from '../../redux/selectors';
import { getLogout } from '../../redux/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  
  const dispatch = useDispatch();
  return (
    <div className={css.user}>
      <p>Hello {name}, email: {email}</p>
      <button onClick={() => dispatch(getLogout())} className={css.button}>
        Logout
      </button>
    </div>
  );
};
