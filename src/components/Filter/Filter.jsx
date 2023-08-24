import { setFilter } from 'redux/Slice/filterSlice';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <label>
      Find contacts by name
      <input
      className={css.input}
        type="text"
        name="filter"
        placeholder="Name"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};