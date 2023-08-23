import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact}>
          <div className={css.item}>
            <h3 className={css.name}>{name}</h3>
            <span className={css.number}>{number}</span>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
