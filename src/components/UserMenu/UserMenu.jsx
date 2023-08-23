import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from '../../redux/selectors';
import { getLogout } from '../../redux/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  return (
    <div className={css.user}>
      <p>{email}</p>
      <button onClick={() => dispatch(getLogout())} className={css.button}>
        Logout
      </button>
    </div>
  );
};
