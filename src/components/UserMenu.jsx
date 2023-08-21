import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from '../redux/selectors';
import {getLogout} from '../redux/operations'

export const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{email}</p>
      <button onClick={()=>dispatch(getLogout())}>Logout</button>
    </div>
  );
};
